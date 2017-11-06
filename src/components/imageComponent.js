import React, { Component } from 'react';

class ImageComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.src = props.src;
    this.alt = props.alt;
    this.klass = props.klass;
  }

  render() {
    return (
      <div className={this.klass}>
        <img src={this.src} alt={this.alt} />
      </div>
    );
  }
}

export default ImageComponent;
