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
      mamaJPG: require('../images/mama.jpg'),
      certJPG: require('../images/certificates/22.jpg'),
    };
  }

  componentDidMount() {
    let triggerHeight = parseInt(this.refs.header.offsetHeight);
    window.addEventListener('scroll', this._calcScroll.bind(this, triggerHeight));
    window.addEventListener('scroll', this._changeClass.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._calcScroll);
    window.removeEventListener('scroll', this._changeClass);
  }

  _changeClass(newClass) {
    this.setState(newClass);
  }

  _calcScroll(triggerHeight) {
    let _window = window;
    let heightDiff = parseInt(triggerHeight);
    let scrollPos = parseInt(_window.scrollY);

    if (scrollPos > heightDiff) {
        this.setState({
          childClass : 'image-holder image-holder__box image-holder__box-rotate col'
        })
    } else {
      this.setState({
        childClass: 'image-holder image-holder__box image-holder__box-rotate-cw col'
      });
    }
  }

  render() {
    return (
      <section className={this.klass} ref='header'>
          <div className='contaniner col'>
            <div id='my-bigger-content' className='row'>
                <div className='col'>
                    <ImageComponent src={this.imgs.mamaJPG} alt='dentist' klass={this.state.childClass}/>
                    <ImageComponent src={this.imgs.certJPG} alt='dentist' klass={this.state.childClass}/>
                </div>
                <div className='col'>
                  <TextComponent header="За Mен" article="Д-р Анна Кирилова-Цолева се дипломира като Доктор по Дентална Медицина през 1984 година в \'Медицинска Академия\' гр. София Факултет по \'Дентална Медицина\' През 1992г защитава поливалентна специалност в същия факултет.Работи като доктор по дентална медицина в \'Институт по зърнени храни и изхранване на населението\' и  \'Институт по Генно Инженерство\'. От 1994 година работи в собствен кабинет със самостоятелна частна практика в гр. Костинброд, област Софийска, България.Редовен член на Български Зъболекарски Съюз." klass="text-holder"/>
                </div>
              </div>
              <div id='my-smaller-content' className='col'>
                <div className='row'>
                    <ImageComponent src={this.imgs.mamaJPG} alt='dentist' klass={this.state.childClass}/>
                    <ImageComponent src={this.imgs.certJPG} alt='dentist' klass={this.state.childClass}/>
                </div>
                <div className='row'>
                  <TextComponent header="За Mен" article="Д-р Анна Кирилова-Цолева се дипломира като Доктор по Дентална Медицина през 1984 година в \'Медицинска Академия\' гр. София Факултет по \'Дентална Медицина\' През 1992г защитава поливалентна специалност в същия факултет.Работи като доктор по дентална медицина в \'Институт по зърнени храни и изхранване на населението\' и  \'Институт по Генно Инженерство\'. От 1994 година работи в собствен кабинет със самостоятелна частна практика в гр. Костинброд, област Софийска, България.Редовен член на Български Зъболекарски Съюз." klass="text-holder"/>
                </div>
              </div>
              <div id='my-smaller-x2-content' className='col'>
                <div className='row'>
                    <ImageComponent src={this.imgs.mamaJPG} alt='dentist' klass={this.state.childClass}/>
                </div>
                <div className='row'>
                    <ImageComponent src={this.imgs.certJPG} alt='dentist' klass={this.state.childClass}/>
                </div>
                <div className='row'>
                  <TextComponent header="За Mен" article="Д-р Анна Кирилова-Цолева се дипломира като Доктор по Дентална Медицина през 1984 година в \'Медицинска Академия\' гр. София Факултет по \'Дентална Медицина\' През 1992г защитава поливалентна специалност в същия факултет.Работи като доктор по дентална медицина в \'Институт по зърнени храни и изхранване на населението\' и  \'Институт по Генно Инженерство\'. От 1994 година работи в собствен кабинет със самостоятелна частна практика в гр. Костинброд, област Софийска, България.Редовен член на Български Зъболекарски Съюз." klass="text-holder"/>
                </div>
              </div>
          </div>
      </section>
    );
  }
}

export default SlideComponent;
