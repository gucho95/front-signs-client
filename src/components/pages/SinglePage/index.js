const { useRouter } = require('@hooks');

const SinglePage = () => {
  const { params } = useRouter;
  console.log(`params`, params);
  return <div>Page</div>;
};

export default SinglePage;
