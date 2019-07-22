import React, { Component } from 'react';
class ImageComponent extends Component {

  render() {
    return (
      <div className={this.props.klass}>
        <img src={this.props.src} className='image-holder__image' alt={this.props.alt} />
      </div>
    );
  }
}

export default ImageComponent;
