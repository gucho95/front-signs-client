import { Spacing, Image, Paragraph } from '@atoms';
import { ThumbnailsCarousel } from '@molecules';
import classNames from 'classnames';
import { useMemo } from 'react';

const materialItemClasses = {
  image: 'w-full h-full object-cover object-center rounded-full h-[130px]',
  title: 'text-p2-30 text-center line-clamp-2',
};

const MaterialItem = ({ title, image, index }) => (
  <div className='w-[130px]'>
    <Image src={image} className={materialItemClasses.image} />
    <Spacing className='pt-5' />
    <Paragraph className={materialItemClasses.title} children={title} />
  </div>
);

const Slide = ({ title, image, index }) => {
  return (
    <div className='flex justify-center '>
      <MaterialItem title={title} image={image} index={index} />
    </div>
  );
};

const Type1 = ({ materials }) => {
  const Slides = useMemo(() => materials?.map((slide, key) => <Slide key={key} index={key} {...slide} />), []);

  return (
    <div className='w-1340px mx-auto overflow-hidden'>
      <div className='w-full max-w-full'>
        <ThumbnailsCarousel
          slides={Slides}
          slidesToShow={materials.length < 6 ? materials.length : 6}
          infinite={true}
        />
      </div>
    </div>
  );
};

export default Type1;
