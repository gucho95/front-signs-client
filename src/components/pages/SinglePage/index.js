import { useSelector } from 'react-redux';
import { selectPage } from '@selectors/page';
import { useRouter } from '@hooks';

const SinglePage = () => {
  const { match } = useRouter();
  const page = match.params.page;
  const pageData = useSelector((state) => selectPage(state, page));

  return <div>{JSON.stringify(pageData)}</div>;
};

export default SinglePage;
