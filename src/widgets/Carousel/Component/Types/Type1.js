import { Spacing, Image, Button, BUTTON_TYPES, Video } from '@atoms';
import { Carousel } from '@molecules';

const classes = {
  root: 'w-full overflow-hidden',
};

const slideClasses = {
  root: ' relative h-795px',
  layer2: 'absolute w-full h-full',
  bgVideo: 'w-full h-full object-cover object-center',
  layer1: 'absolute bottom-7 pr-7  pl-52 text-white bg-dark bg-opacity-50 max-w-60vw',
  title: 'w-527px text-h1',
  button: 'bg-yellow px-24 py-5 text-p1 uppercase',
};

const Slide = ({ title, buttonText, video }) => (
  <div className={slideClasses.root}>
    <div className={slideClasses.layer2}>
      <Video autoPlay={true} src={video} className={slideClasses.bgVideo} />
    </div>
    <div className={slideClasses.layer1}>
      <Spacing className='pt-16' />
      <div className={slideClasses.title} children={title} />
      <Spacing className='pt-12' />
      <Button type={BUTTON_TYPES.CUSTOM} className={slideClasses.button} children={buttonText} />
      <Spacing className='pt-20' />
    </div>
  </div>
);

const Type1 = ({ slides }) => {
  const Slides = slides?.map((slide, key) => <Slide key={key} {...slide} />);
  return (
    <div className={classes.root}>
      <Carousel slides={Slides} />
    </div>
  );
};

export default Type1;
