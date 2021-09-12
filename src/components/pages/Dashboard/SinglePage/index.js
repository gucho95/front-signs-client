import { Button, BUTTON_TYPES, Heading, Link, Spacing, Block } from '@atoms';
import { SinglePageTemplate } from '@templates';
import { useSelector } from 'react-redux';
import { selectPage } from '@selectors/page';
import { useRouter } from '@hooks';

const classes = {
  titleWrapper: 'flex justify-between',
  pageLink: 'underline',
  content: 'grid pb-3 gap-y-1',
};

const SinglePage = () => {
  const { match, pathname } = useRouter();
  const page = match.params.page;

  // SELECTORS
  const pageData = useSelector((state) => selectPage(state, page));
  console.log(`pageData`, pageData);

  return (
    <SinglePageTemplate>
      <Spacing className='pt-4' />
      <div className={classes.titleWrapper}>
        <Heading level={2} children={pageData?.label} />
        <Link to={`/pages/${page}`} children={'See page'} className={classes.pageLink} />
      </div>
      <Spacing className='pt-4' />
      <div className='w-full h-1px bg-grey-light' />
      <Spacing className='pt-4' />

      <div className={classes.content}>
        <Block name='Block 1' />
        <Block name='Block 2' />
        <Block name='Block 3' />
      </div>

      <Link to={`${pathname}/add-widget`}>
        <Button type={BUTTON_TYPES.PRIMARY} children='Add widget' />
      </Link>
    </SinglePageTemplate>
  );
};

export default SinglePage;
