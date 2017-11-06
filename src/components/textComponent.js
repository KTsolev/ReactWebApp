import React, { Component } from 'react';

class TextComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.header = props.header;
    this.article = props.article;
    this.klass = props.klass;
  }

  render() {
    return (
      <div className={this.klass}>
        <h2>{this.header}</h2>
        <h3>{this.article}</h3>
      </div>
    );
  }
}

export default TextComponent;
