import { Spacing } from '@atoms';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from '@selectors/page';
import { selectPageBlocks, selectPageLastBlock } from '@selectors/pageBlocks';
import pageWidgetActions from '@actions/columnWidgets';
import pageActions from '@actions/page';
import blockActions from '@actions/pageBlocks';
import { useRouter } from '@hooks';
import { Fragment } from 'react';
import { useHistory } from 'react-router';
import { PATHS } from '@constants/paths';
import { v4 as uuidv4 } from 'uuid';

// subcomponents
import BlockRenderer from './BlockRenderer';
import BlockActions from './BlockActions';
import PageActions from './PageActions';
import { BLOCK } from '@constants/system';

const SinglePage = () => {
  const { match, pathname } = useRouter();
  const dispatch = useDispatch();
  const { page } = match.params;
  const history = useHistory();

  // SELECTORS
  const pageData = useSelector((state) => selectPage(state, page));
  const pageBlocks = useSelector((state) => selectPageBlocks(state, page));
  const pageLastBlock = useSelector((state) => selectPageLastBlock(state, page));

  // WIDGET ACTIONS

  const onWidgetDuplicate = (widget) => {
    const { id, ...widgetData } = widget;
    const data = { page, id: uuidv4(), widgetData };
    dispatch(pageWidgetActions.add(data));
  };
  const onWidgetRemove = (id) => dispatch(pageWidgetActions.remove({ page, id }));
  const onWidgetUpdate = (id) => history.push(`${pathname}/update-widget/${id}`);

  const onPageRemove = () => {
    dispatch(pageActions.remove(page));
    history.push(PATHS.ADD_PAGE);
  };
  // BLOCK ACTIONS

  const onAddBlock = () => {
    const data = {
      parentId: page,
      id: uuidv4(),
      index: pageLastBlock ? pageLastBlock.index + 1 : 0,
      type: BLOCK,
    };
    dispatch(blockActions.add(data));
  };
  const onRemoveBlock = (payload) => dispatch(blockActions.remove(payload));

  return (
    <Fragment>
      <Spacing className='py-2' />
      <PageActions page={pageData.path} data={pageData} onRemove={onPageRemove} />
      <Spacing className='py-2' />
      <BlockRenderer
        data={pageBlocks}
        onRemoveBlock={onRemoveBlock}
        // onUpdate={onWidgetUpdate}
        // onRemove={onWidgetRemove}
        // onDuplicate={onWidgetDuplicate}
      />
      <BlockActions onAdd={onAddBlock} />
    </Fragment>
  );
};

export default SinglePage;
