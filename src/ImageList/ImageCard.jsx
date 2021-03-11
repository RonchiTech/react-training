import React, { Component } from 'react';

class ImageCard extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="image-card">
        <img src={image.urls.regular} alt={image.description} />
      </div>
    );
  }
}
export default ImageCard;
