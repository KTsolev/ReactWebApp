import React, { Component } from 'react';

class LeftArrow extends React.Component {
  handleClick (event) {
    const { id } = event.target;
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
