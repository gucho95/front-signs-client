import { Fragment, useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mediaActions from '@actions/media';
import uiActions from '@actions/ui';
import { selectMediaFiles, selectMedias } from '@selectors/media';
import { Spacing, MediaUploader, Pagination } from '@atoms';
import { useHistory, useLocation } from 'react-router';
import { getSearchParam, setSearchParams } from '@utils';
import MediaItem from './MediaItem';
import MediaMeta from './MediaMeta';
import { FILE_MANAGER } from '@constants/modals';

const LIMIT = 20;

const Media = () => {
  const { search } = useLocation();
  const history = useHistory();
  const [selectedMediaId, setSelectedMediaId] = useState(null);
  const dispatch = useDispatch();
  const findAll = (payload) => dispatch(mediaActions.find(payload));
  const upload = (payload) => dispatch(mediaActions.create(payload));

  const { data } = useSelector(selectMedias);
  const currentPage = getSearchParam({ search, key: 'page' });

  const medias = useSelector(selectMediaFiles);
  const total = data?.count;

  const findAllMedias = () => {
    const offset = Number(currentPage - 1) ? LIMIT * Number(currentPage - 1) : 0;
    findAll({ offset });
  };

  const selectedMedia = useMemo(
    () => selectedMediaId && medias.find((m) => m.id === selectedMediaId),
    [selectedMediaId]
  );

  const onPageChange = (value) => {
    const searchParams = setSearchParams({ search, params: [{ key: 'page', value }] });
    history.replace({ search: searchParams });
  };

  useEffect(() => {
    if (!currentPage) {
      return;
    }
    findAllMedias();
  }, [currentPage]);

  if (!currentPage) {
    onPageChange(1);
  }

  return (
    <Fragment>
      <Spacing className='pt-16' />

      <div className='flex items-start'>
        <div className='flex flex-col justify-start flex-1 transition-all duration-300'>
          <MediaUploader upload={upload} find={findAllMedias} />

          <div className='grid flex-1 grid-cols-4 gap-2 transition-all'>
            {medias?.map((media) => (
              <MediaItem
                key={media.id}
                selected={media.id === selectedMediaId}
                onSelect={() => setSelectedMediaId(media.id)}
                {...media}
              />
            ))}
          </div>
          <Spacing className='pt-4' />
          {total ? (
            <Pagination current={Number(currentPage)} pageSize={LIMIT} total={total} onChange={onPageChange} />
          ) : null}
        </div>
        <Spacing className='pl-4' />

        {selectedMediaId ? (
          <div className='transition-all duration-300'>
            <Spacing className='pl-4' />
            <div className='w-80'>
              <MediaMeta
                key={selectedMediaId}
                find={findAllMedias}
                selectedMedia={selectedMedia}
                setSelectedMediaId={setSelectedMediaId}
              />
            </div>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default Media;
