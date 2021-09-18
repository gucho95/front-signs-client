import { Button, BUTTON_TYPES, Heading, Link, Spacing, Block } from '@atoms';
import { useSelector } from 'react-redux';
import { selectPage } from '@selectors/page';
import { selectPageWidgets } from '@selectors/pageWidgets';
import { useRouter } from '@hooks';
import { Fragment } from 'react';

const classes = {
  titleWrapper: 'flex justify-between',
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
      <Spacing className='pt-4' />
      <div className={classes.titleWrapper}>
        <Heading level={2} children={pageData?.title} />
        <Link to={`/pages/${page}`} children={'See page'} className={classes.pageLink} />
      </div>
      <Spacing className='pt-4' />
      <div className='w-full h-1px bg-grey-light' />
      <Spacing className='pt-4' />

      <div className={classes.content}>
        {pageWidgets?.length ? pageWidgets.map((widget, key) => <Block key={key} {...widget} />) : 'No widgets'}
      </div>

      <Link to={`${pathname}/add-widget`}>
        <Button type={BUTTON_TYPES.PRIMARY} children='Add widget' />
      </Link>
    </Fragment>
  );
};

export default SinglePage;
