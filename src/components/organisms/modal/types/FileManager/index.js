import { Fragment, useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mediaActions from '@actions/media';
import { selectMediaFiles, selectMedias } from '@selectors/media';
import { Spacing, MediaUploader, Pagination } from '@atoms';
import MediaItem from '@pages/Dashboard/Media/MediaItem';

const LIMIT = 20;

const FileManager = ({ params, closeModal }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const findAll = (payload) => dispatch(mediaActions.find(payload));
  const upload = (payload) => dispatch(mediaActions.create(payload));
  const { data } = useSelector(selectMedias);

  const medias = useSelector(selectMediaFiles);
  const total = data?.count;

  const findAllMedias = () => {
    const offset = Number(page - 1) ? LIMIT * Number(page - 1) : 0;
    findAll({ offset });
  };

  const onPageChange = (value) => {
    setPage(value);
  };

  useEffect(() => {
    if (!page) {
      return;
    }
    findAllMedias();
  }, [page]);

  if (!page) {
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
                onSelect={() => {
                  params?.onSelect(media.relativePath);
                  closeModal();
                }}
                {...media}
              />
            ))}
          </div>
          <Spacing className='pt-4' />
          {total ? <Pagination current={page} pageSize={LIMIT} total={total} onChange={onPageChange} /> : null}
        </div>
        <Spacing className='pl-4' />
      </div>
    </Fragment>
  );
};

export default FileManager;
