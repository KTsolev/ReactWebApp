import React, { Component } from 'react';

class RightArrow extends React.Component{
  handleClick(event) {
    const { id } = event.target;
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
