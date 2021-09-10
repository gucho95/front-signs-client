const { Heading } = require('@atoms');

const Page404 = () => {
  return (
    <div>
      <Heading level={1} children='Error 404' />
      <Heading level={3} children='Page not found' />
    </div>
  );
};

export default Page404;
