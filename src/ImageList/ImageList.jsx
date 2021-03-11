import React from 'react';
import './ImageList.scss';
import ImageCard from './ImageCard';
const ImageList = ({ images }) => {
  const imgs = images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));

  return <div className="image-list">{imgs}</div>;
};
export default ImageList;
