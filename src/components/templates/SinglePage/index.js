import { Heading, Spacing } from '@atoms';
import { Fragment } from 'react';
import WidgetRenderer from './WidgetRenderer';

const SinglePage = ({ widgets }) => {
  return (
    <div>
      <Spacing className='pt-20' />
      {widgets?.length ? (
        widgets.map((widget, key) => <WidgetRenderer key={key} {...widget} />)
      ) : (
        <Heading level={2} children='No Data' className='text-center' />
      )}
      <Spacing className='pt-20' />
    </div>
  );
};

export default SinglePage;
