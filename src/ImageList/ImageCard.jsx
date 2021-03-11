import React, { Component, createRef } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imageRef = createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load', () => {
      console.log(this.imageRef.current.clientHeight);
    });
    // console.log(this.imageRef.current.clientHeight);
  }

  render() {
    const {
      description,
      urls: { regular },
    } = this.props.image;
    return (
      <div className="image-card">
        <img ref={this.imageRef} src={regular} alt={description} />
      </div>
    );
  }
}
export default ImageCard;
