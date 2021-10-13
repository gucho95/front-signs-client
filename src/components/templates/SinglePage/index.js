import { Heading, Spacing } from '@atoms';
import BlockRenderer from './BlockRenderer';
import { Fragment } from 'react';

const SinglePage = ({ data }) => {
  const Content = data?.length ? (
    data.map((block, key) => (
      <Fragment key={key}>
        <BlockRenderer data={block} />
        <Spacing className='pt-10' />
      </Fragment>
    ))
  ) : (
    <Heading level={2} children='No Data' className='text-center' />
  );

  return <div className='grid grid-cols-1 gap-y-4' children={Content} />;
};

export default SinglePage;
