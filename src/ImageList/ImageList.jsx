import React from 'react';

const ImageList = ({ images }) => {
  const imgs = images.map(({ id, urls:{small}, description }) => (
    <img key={id} src={small} alt={description} />
  ));

  return <div>{imgs}</div>;
};
export default ImageList;
