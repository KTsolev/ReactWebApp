import React, { Component } from 'react';
import TextComponent from './textComponent';
import ImageComponent from './imageComponent';
import mama from '../images/mama.jpg';
import cert1 from '../images/certificates/22.jpg';

class SlideComponent extends Component {
  constructor(props) {
    super(props);
    this.header = props.header;
    this.klass = props.klass;
  }

  render() {
    return (    
    <section className={this.klass}>
        <div className='container'>
            <h2>{this.header}</h2>
        </div>
    </section>
    );
  }
}

export default SlideComponent;
