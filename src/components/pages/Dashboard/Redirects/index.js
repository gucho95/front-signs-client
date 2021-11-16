import { Table, Spacing, Pagination, Button, BUTTON_TYPES, BUTTON_SIZES } from '@atoms';
import { Fragment, useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import redirectActions from '@actions/redirects';
import uiActions from '@actions/ui';
import { selectRedirectsCount, selectRedirectsData } from '@selectors/redirects';
import { useHistory, useLocation } from 'react-router';
import { getSearchParam, setSearchParams } from '@utils';
import { CREATE_REDIRECT } from '@constants/modals';

const LIMIT = 10;
const getColumns = ({ remove, openEditModal }) => [
  {
    title: 'Old url',
    dataIndex: 'oldUrl',
    key: 'oldUrl',
  },
  {
    title: 'New Url',
    dataIndex: 'newUrlTo',
    key: 'newUrlTo',
  },
  {
    title: 'Regex url',
    dataIndex: 'regexUrl',
    key: 'regexUrl',
  },
  {
    title: 'Status code',
    dataIndex: 'statusCode',
    key: 'statusCode',
  },
  {
    title: 'Operations',
    dataIndex: '',
    key: 'operations',
    width: 160,
    render: (item) => (
      <div className='flex space-x-1 items-center justify-center'>
        <Button
          type={BUTTON_TYPES.PRIMARY}
          size={BUTTON_SIZES.CUSTOM}
          className='py-1 px-2'
          onClick={() => openEditModal(item)}
        >
          Edit
        </Button>
        <Button
          type={BUTTON_TYPES.DANGER}
          size={BUTTON_SIZES.CUSTOM}
          className='py-1 px-2'
          onClick={() => {
            remove({ id: item.id });
          }}
        >
          Delete
        </Button>
      </div>
    ),
  },
];

const Redirects = () => {
  const { search } = useLocation();
  const history = useHistory();
  const [selectedMediaId, setSelectedMediaId] = useState(null);
  const dispatch = useDispatch();
  const findAll = (payload) => dispatch(redirectActions.find(payload));
  const remove = (payload) => dispatch(redirectActions.remove(payload));

  const data = useSelector(selectRedirectsData);
  const total = useSelector(selectRedirectsCount);
  const currentPage = getSearchParam({ search, key: 'page' });

  const findAllRedirects = () => {
    const offset = Number(currentPage - 1) ? LIMIT * Number(currentPage - 1) : 0;
    findAll({ offset, limit: LIMIT });
  };

  const onPageChange = (value) => {
    const searchParams = setSearchParams({ search, params: [{ key: 'page', value }] });
    history.replace({ search: searchParams });
  };

  useEffect(() => {
    if (!currentPage) {
      return;
    }
    findAllRedirects();
  }, [currentPage]);

  if (!currentPage) {
    onPageChange(1);
  }

  const openCreateModal = (data) =>
    dispatch(uiActions.openModal({ type: CREATE_REDIRECT, data: { ...data, findAll: findAllRedirects } }));

  return (
    <Fragment>
      <Spacing className='pt-4' />
      <Button type={BUTTON_TYPES.PRIMARY} children='Create redirect' onClick={() => openCreateModal(null)} />
      <Spacing className='pt-2' />
      <Table
        columns={getColumns({ remove, openEditModal: (data) => openCreateModal(data) })}
        data={data}
        tableLayout='fixed'
        className='min-w-full'
      />
      <Spacing className='pt-4' />
      <Spacing className='pt-4' />
      {total ? (
        <Fragment>
          <Pagination current={Number(currentPage)} pageSize={LIMIT} total={total} onChange={onPageChange} />
          <Spacing className='pt-4' />
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default Redirects;
