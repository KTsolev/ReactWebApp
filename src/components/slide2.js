import React, { Component } from 'react';
import TextComponent from './textComponent';

class SlideComponent extends Component {
  constructor(props) {
    super(props);
    this.header = props.header;
    this.klass = props.klass;
  }

  render() {
    return (
    <section id={this.props.ids} className={this.klass}>
      <TextComponent 
        header="За Кабинета" 
        article="Кабинетът разполага с модерно оборудван дигитален рентген Plaumenka от последно поколение. Д-р Анна Цолева работи с материали от последно поколение на водещи фирми в световната стоматология като GC, Charisma, EsteX, emax, ivoctar, моделно-ляти-ставни-протези, но се усеща като мост." 
        klass="text-holder"/>
    </section>
    );
  }
}

export default SlideComponent;
