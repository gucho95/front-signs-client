import React from 'react';
import Slider from 'react-slick';
import './index.scss';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
};

const Carousel = ({ params = {}, slides: Slides }) => {
  const allSettings = { ...settings, ...params };
  return <Slider {...allSettings} children={Slides} className='relative' />;
};

export default Carousel;
