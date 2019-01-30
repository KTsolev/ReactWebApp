import React, { Component } from 'react';
import Slider from './Slider';

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
            <Slider />
        </div>
    </section>
    );
  }
}

export default SlideComponent;
