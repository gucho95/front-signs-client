const Video = ({ src, ...videoProps }) => {
  return (
    <video {...videoProps} muted={true} loop>
      <source src={src} />
    </video>
  );
};

export default Video;
