import React, { Component, createRef } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imageRef = createRef();
    this.state = {
      spans: 0,
    };
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load', () => {
      this.setSpan();
    });
  }
  setSpan() {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState({spans});
  }
  render() {
    const {
      description,
      urls: { regular },
    } = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} src={regular} alt={description} />
      </div>
    );
  }
}
export default ImageCard;
