import React, { Component } from 'react';
import '../styles/scss/textComponent.scss';

class TextComponent extends Component {

  render() {
    return (
        <div className={this.props.klass}>
          <h2 className='text-holder__header'>{this.props.header}</h2>
          <h3 className='text-holder__article'>{this.props.article}</h3>
        </div>
      );
    }
}

export default TextComponent;
