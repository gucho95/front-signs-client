import { Heading, Link, Spacing } from '@atoms';
import { SinglePageTemplate } from '@templates';
import { useSelector } from 'react-redux';
import { selectPage } from '@selectors/page';
import { useRouter } from '@hooks';

const SinglePage = () => {
  const { match } = useRouter();
  const page = match.params.page;
  const pageData = useSelector((state) => selectPage(state, page));

  return (
    <SinglePageTemplate>
      <Spacing className='pt-4' />
      <Heading level={2} children={pageData.label} />
      <Spacing className='pt-4' />
      <div>
        <Link to={`/${page}`} children={'See'} className='underline' />
      </div>
    </SinglePageTemplate>
  );
};

export default SinglePage;
