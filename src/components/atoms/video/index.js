import { forwardRef } from 'react';

const Video = forwardRef(({ src, ...videoProps }, ref) => {
  return (
    <video muted={true} loop={true} preload={true} {...videoProps} ref={ref}>
      <source src={src} />
    </video>
  );
});

export default Video;
