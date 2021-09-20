import { Spacing, Button, BUTTON_TYPES, Video } from '@atoms';
import { Carousel } from '@molecules';
import classNames from 'classnames';
import { useMemo } from 'react';

const classes = {
  root: 'w-full overflow-hidden',
};

const slideClasses = {
  root: ' relative h-795px',
  layer2: 'absolute w-full h-full ',
  bgVideo: 'w-full h-full object-cover object-center',
  layer1: 'absolute bottom-7 pr-7  pl-52 text-white bg-dark bg-opacity-50 max-w-60vw',
  title: 'w-527px text-h1 font-black',
  button: 'bg-yellow px-24 py-5 text-p1 uppercase',
};

const Slide = ({ title, buttonText, video, index }) => {
  return (
    <div className={slideClasses.root}>
      <div className={slideClasses.layer2}>
        <Video src={video} className={classNames(slideClasses.bgVideo, 'transition-all')} autoPlay={!index} />
      </div>
      <div className={slideClasses.layer1}>
        <Spacing className='pt-16' />
        <div className={slideClasses.title} dangerouslySetInnerHTML={{ __html: title }} />
        <Spacing className='pt-12' />
        <Button type={BUTTON_TYPES.CUSTOM} className={slideClasses.button} children={buttonText} />
        <Spacing className='pt-20' />
      </div>
    </div>
  );
};

const setAutoplayto = (state, index) => {
  const slides = document.querySelectorAll('.slick-slide:not(.slick-cloned)');

  const currentSlideNode = slides[index];
  const currentVideoNode = currentSlideNode && currentSlideNode.getElementsByTagName('video')[0];

  if (currentVideoNode) {
    currentVideoNode.autoplay = state;
    currentVideoNode.load();
  }
};

const Type1 = ({ slides }) => {
  const Slides = useMemo(() => slides?.map((slide, key) => <Slide key={key} index={key} {...slide} />), []);
  const enableAutoplay = (index) => setAutoplayto(true, index);
  const disableAutoplay = (index) => setAutoplayto(false, index);

  return (
    <div className={classes.root}>
      <Carousel slides={Slides} afterChange={enableAutoplay} beforeChange={disableAutoplay} />
    </div>
  );
};

export default Type1;
