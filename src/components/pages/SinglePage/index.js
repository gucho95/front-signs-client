import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectPage } from '@selectors/page';
import { selectPageWidgets } from '@selectors/pageWidgets';
import { useRouter } from '@hooks';
import { SinglePageTemplate } from '@templates';

const SinglePage = () => {
  const { match } = useRouter();
  const page = match.params.page;
  const pageData = useSelector((state) => selectPage(state, page));
  const pageWidgets = useSelector((state) => selectPageWidgets(state, page));
  const title = pageData?.title;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return <SinglePageTemplate widgets={pageWidgets}>{JSON.stringify(pageWidgets)}</SinglePageTemplate>;
};

export default SinglePage;
