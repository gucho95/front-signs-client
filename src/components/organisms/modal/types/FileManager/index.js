import { Fragment, useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mediaActions from '@actions/media';
import { selectMediaFiles, selectMedias } from '@selectors/media';
import { Spacing, MediaUploader, Pagination } from '@atoms';
import Media from '@pages/Dashboard/Media';
import MediaItem from '@pages/Dashboard/Media/MediaItem';

const LIMIT = 15;

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
    findAll({ offset, limit: LIMIT });
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

  const onMediaSelect = (media) => {
    params?.onSelect(media.relativePath);
    closeModal();
  };

  return (
    <div className='max-w-screen-2xl flex justify-center w-full'>
      <Media selectable={true} onMediaSelect={onMediaSelect} />
    </div>
  );
};

export default FileManager;
