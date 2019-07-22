import React, { Component } from 'react';
import Slide from './SlideComponent/Slide';

class SlideComponent extends Component {
  constructor(props) {
    super(props);
    this.header = props.header;
    this.klass = props.klass;
    this.ids = props.ids
  }

  render() {
    return (
      <section id={this.ids} className={this.klass}>
        <Slide />
      </section>
    );
  }
}

export default SlideComponent;
