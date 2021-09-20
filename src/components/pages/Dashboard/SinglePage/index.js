import { Button, BUTTON_TYPES, Heading, Link, Spacing, Block, BUTTON_SIZES } from '@atoms';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from '@selectors/page';
import { selectPageWidgets } from '@selectors/pageWidgets';
import pageWidgetActions from '@actions/pageWidgets';
import pageActions from '@actions/page';
import { useRouter } from '@hooks';
import { Fragment } from 'react';
import { useHistory } from 'react-router';
import { PATHS } from '@constants/paths';

const classes = {
  header: 'sticky top-0 bg-grey-body',
  headerWrapper: 'flex justify-between items-center w-full',
  buttonWrapper: 'sticky bottom-0 py-4 bg-grey-body',
  actionWrapper: 'flex items-center space-x-4',
  pageLink: 'underline',
  content: 'grid pb-3 gap-y-1',
};

const SinglePage = () => {
  const { match, pathname } = useRouter();
  const dispatch = useDispatch();
  const { page } = match.params;
  const history = useHistory();

  // SELECTORS
  const pageData = useSelector((state) => selectPage(state, page));
  const pageWidgets = useSelector((state) => selectPageWidgets(state, page));

  // ACTIONS
  const onWidgetRemoveClick = (id) => dispatch(pageWidgetActions.remove({ page, id }));
  const onWidgetUpdateClick = (id) => history.push(`${pathname}/update-widget/${id}`);

  const onPageRemove = () => {
    dispatch(pageActions.remove(pageData?.id));
    history.push(PATHS.ADD_PAGE);
  };

  return (
    <Fragment>
      <Spacing className='py-2' />
      <div className={classes.header}>
        <div className={classes.headerWrapper}>
          <Heading level={3} children={pageData?.title} />
          <div className={classes.actionWrapper}>
            <Button
              type={BUTTON_TYPES.DANGER}
              size={BUTTON_SIZES.SMALL}
              children='Remove page'
              onClick={onPageRemove}
            />
            <Link to={`/pages/${page}`} className={classes.pageLink}>
              <Button type={BUTTON_TYPES.PRIMARY} size={BUTTON_SIZES.SMALL} children='See page' />
            </Link>
          </div>
        </div>
        <Spacing className='pt-2' />
        <div className='w-full h-1px bg-grey-light' />
        <Spacing className='pt-4' />
      </div>

      <div className={classes.content}>
        {pageWidgets?.length
          ? pageWidgets.map((widget, key) => (
              <Block
                key={key}
                onUpdate={() => onWidgetUpdateClick(widget.id)}
                onRemove={() => onWidgetRemoveClick(widget.id)}
                {...widget}
              />
            ))
          : 'No widgets'}
      </div>
      <div className={classes.buttonWrapper}>
        <div className='w-full h-1px bg-grey-light' />
        <Spacing className='pt-2' />
        <Link to={`${pathname}/add-widget`}>
          <Button type={BUTTON_TYPES.PRIMARY} children='Add widget' />
        </Link>
      </div>
    </Fragment>
  );
};

export default SinglePage;
