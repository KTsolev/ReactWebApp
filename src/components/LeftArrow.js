import React, { Component } from 'react';
import '../styles/scss/slider.scss';

class LeftArrow extends React.Component {
  handleClick (event) {
    const {id} = event.target;
    console.log(id);
    console.log('this is:', this);
  }
  render() {
    return (
      <div className="backArrow">
        <span> prev </span>
      </div>
    );
  }
}

export default LeftArrow;
