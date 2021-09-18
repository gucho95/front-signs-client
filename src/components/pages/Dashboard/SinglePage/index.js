import { Button, BUTTON_TYPES, Heading, Link, Spacing, Block } from '@atoms';
import { useSelector } from 'react-redux';
import { selectPage } from '@selectors/page';
import { selectPageWidgets } from '@selectors/pageWidgets';
import { useRouter } from '@hooks';
import { Fragment } from 'react';

const classes = {
  titleWrapper: 'sticky top-0 bg-grey-body',
  buttonWrapper: 'sticky bottom-0 py-4 bg-grey-body',
  pageLink: 'underline',
  content: 'grid pb-3 gap-y-1',
};

const SinglePage = () => {
  const { match, pathname } = useRouter();
  const { page } = match.params;

  // SELECTORS
  const pageData = useSelector((state) => selectPage(state, page));
  const pageWidgets = useSelector((state) => selectPageWidgets(state, page));

  return (
    <Fragment>
      <Spacing className='py-2' />
      <div className={classes.titleWrapper}>
        <div className='flex justify-between items-center w-full'>
          <Heading level={3} children={pageData?.title} />
          <Link to={`/pages/${page}`} className={classes.pageLink} children='See page' />
        </div>
        <div className='w-full h-1px bg-grey-light' />
        <Spacing className='pt-4' />
      </div>

      <div className={classes.content}>
        {pageWidgets?.length ? pageWidgets.map((widget, key) => <Block key={key} {...widget} />) : 'No widgets'}
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
