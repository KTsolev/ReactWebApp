import React, { Component } from 'react';
import TextComponent from './textComponent';
import ImageComponent from './ImageComponent/imageComponent';

class SlideComponent extends Component {
  constructor(props) {
    super(props);
    this.header = props.header;
    this.klass = props.klass;
    this.state = {
      childClass: '',
    };

    this.imgs = {
      certJPG: require('../images/23.jpg'),
    };
  }

  render() {
    return (
      <section id={this.props.ids} className={this.klass} ref='header'>
          <div className='container'>
            <div className='container__img'>
              <ImageComponent 
                src={this.imgs.certJPG} 
                alt='dentist' 
                klass={this.state.childClass}/>
            </div>
            <div className='container__text'>
              <TextComponent 
                header="За Mен" 
                article="Д-р Анна Кирилова-Цолева се дипломира като Доктор по Дентална Медицина през 1984 година в \'Медицинска Академия\' гр. София Факултет по \'Дентална Медицина\' През 1992г защитава поливалентна специалност в същия факултет.Работи като доктор по дентална медицина в \'Институт по зърнени храни и изхранване на населението\' и  \'Институт по Генно Инженерство\'. От 1994 година работи в собствен кабинет със самостоятелна частна практика в гр. Костинброд, област Софийска, България.Редовен член на Български Зъболекарски Съюз." 
                klass="text-holder"/>
            </div>
          </div>
      </section>
    );
  }
}

export default SlideComponent;
