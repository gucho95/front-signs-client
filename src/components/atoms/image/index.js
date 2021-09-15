const Image = ({ alt, src, ...imgProps }) => {
  return <img src={src} alt={alt} {...imgProps} />;
};

export default Image;
