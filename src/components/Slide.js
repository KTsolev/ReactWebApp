import React, { Component } from 'react';
import '../styles/scss/slider.scss';

export default class Slide extends Component {

  render() {
    console.log(this.props.slide);

    const slide = <div className="slider-container">
        <div style={this.props.slide} className="slide"></div>
      </div>;
    return slide;
  }
}
