import { Spacing, Image, Paragraph } from '@atoms';
import { Fragment } from 'react';
import Icon from '../Icon';

const mock = [
  'Lorem ipsum lya lya lya tra',
  'Lorem ipsum lya lya lya tra',
  'Lorem ipsum lya lya lya tra',
  'Lorem ipsum lya lya lya tra',
];

const classes = {
  layer1: 'inset-0 absolute w-full h-full',
  layer2: 'inset-0 absolute w-full h-full',
};

const Type1 = ({ items }) => {
  const Content = () => (
    <Fragment>
      <Spacing className='pt-5' />
      <div className='w-718px flex items-start justify-between flex-wrap space-y-5 mx-auto'>
        <Icon children='aaaaaaaaaaa asdasd as asdasdasd asdasd ' />
        <Icon children='aaaaaaaaaaa' />
        <Icon children='aaaaaaaaaaa' />
        <Icon children='aaaaaaaaaaa' />
      </div>
      <Spacing className='pt-5' />
    </Fragment>
  );
  return (
    <div
      className='w-full relative overflow-hidden bg-cover bg-fixed bg-center bg-no-repeat'
      style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg)` }}
    >
      <div className='absolute z-10 h-full w-full backdrop-filter backdrop-blur-sm'>
        <Content />
      </div>
      <div className='invisible'>
        <Content />
      </div>
    </div>
  );
};

export default Type1;
