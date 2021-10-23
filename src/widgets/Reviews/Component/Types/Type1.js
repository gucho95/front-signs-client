import CardWidget from '@widgets/Card/Component/Types/Type3';
import { Heading, HEADING_LEVELS, Spacing } from '@atoms';
import { Fragment } from 'react';

const classes = { container: 'grid grid-cols-4 gap-7' };

const Type1 = (props) => {
  const items = props.items;

  return (
    <Fragment>
      <Heading level={HEADING_LEVELS[2]} children='Our Services' className='text-center' />
      <Spacing className='pt-14' />
      <div className={classes.container}>
        {items?.map((item, key) => (
          <CardWidget {...item} key={key} />
        ))}
      </div>
    </Fragment>
  );
};

export default Type1;
