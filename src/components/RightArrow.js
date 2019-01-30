import React, { Component } from 'react';
import '../styles/scss/slider.scss';

class RightArrow extends React.Component{
  handleClick(event) {
    const {id} = event.target;
    console.log(id)
    console.log('this is:', this);
  }
  render() {
    return (
      <div className="nextArrow">
        <span> next </span>
      </div>
    );
  }
}
export default RightArrow;
