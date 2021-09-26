import { Heading, Spacing } from '@atoms';
import { Fragment } from 'react';
import WidgetRenderer from './WidgetRenderer';

const SinglePage = ({ widgets }) => {
  const Content = widgets?.length ? (
    widgets.map((widget, key) => (
      <Fragment key={key}>
        <WidgetRenderer {...widget} />
        <Spacing className='pt-10' />
      </Fragment>
    ))
  ) : (
    <Heading level={2} children='No Data' className='text-center' />
  );

  return <div className='grid grid-cols-1 gap-y-4' children={Content} />;
};

export default SinglePage;
