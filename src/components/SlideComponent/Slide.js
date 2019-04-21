import React, { Component } from 'react';
import slides from '../../data/slides.json';
import services from '../../data/Services';
import './slide.scss';

const { importAll, inView } = services;

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/)),
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.calcScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.calcScroll.bind(this));
  }

  calcScroll() {
    const elements = document.getElementsByClassName('slide__container');
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
      let el = elements[i];
      // if (inView(el, 'slide')) {
      //   el.classList.add('slide__container--animated');
      // } else {
      //   el.classList.remove('slide__container--animated');
      // }
    }
  }

  render() {
    console.log(this.props.ids);

    //classnames  index % 2 === 0 ? 'slide__container slide__container--left' : 'slide__container slide__container--right
    return <div id={this.props.ids} className="slide">
      {slides.map((slide, index) => {
          return <div
            key={index}
            className='slide__container'>
            <div className="slide__title">
              <span>{slide.slideTitle}</span>
            </div>
            <div className="slide__images">
              {slide.slideImgs.map((item, index) =>
                 <div
                  key={index}
                  className="slide__img">
                  <img src={this.state.images[item]} alt="img" />
                </div>)}
              {slide.remarks ? slide.remarks.map((item, index) =>
                <div
                key={index}
                className="slide__img">
                <span>{item}</span>
              </div>) : null}
            </div>
            <div className="slide__text">
              <span>{slide.slideText}</span>
              {slide.slideList && slide.slideList.length > 0 ?
                <ul className="slide__list">
                  {slide.slideList.map((item, indx) =>
                    <li key={indx}>{item.listText}</li>
                  )}
                </ul> : null}
            </div>
          </div>;
        })}
      </div>;
  }
}
