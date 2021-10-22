import TextWidget from '@widgets/Text/Component/Types/Type5';
import CardWidget from '@widgets/Card/Component/Types/Type1';
import { Heading, HEADING_LEVELS, Spacing } from '@atoms';
import { Fragment } from 'react';

const mock = {
  title: 'What is Lorem Ipsum?',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type`,
  image:
    'https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
};

const classes = {
  root: 'grid grid-cols-1 gap-y-7 text-black',
  container: 'grid grid-cols-3 gap-x-7',
};

const Type1 = () => {
  return (
    <Fragment>
      <Heading level={HEADING_LEVELS[2]} children='Our Services' className='text-center' />
      <Spacing className='pt-12' />
      <div className={classes.root}>
        <div className={classes.container}>
          <TextWidget {...mock} />
          <TextWidget {...mock} />
          <TextWidget {...mock} />
        </div>
        <div className={classes.container}>
          <TextWidget {...mock} />
          <TextWidget {...mock} />
          <TextWidget {...mock} />
        </div>
        <div className='brd'>
          <CardWidget {...mock} />
        </div>
      </div>
    </Fragment>
  );
};

export default Type1;
