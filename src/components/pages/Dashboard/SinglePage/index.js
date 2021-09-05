import { SinglePageTemplate } from '@templates';

const { useRouter } = require('@hooks');

const SinglePage = () => {
  const { match } = useRouter();
  const { params } = match;

  return <SinglePageTemplate>{params.page}</SinglePageTemplate>;
};

export default SinglePage;
