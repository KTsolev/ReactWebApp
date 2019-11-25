import React, { Component } from 'react';
import slides from '../../data/slides.json';
import services from '../../Services/Services';
import './slide.scss';

const uuidv1 = require('uuid/v1');

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
    const firstEl = document.getElementsByClassName('slide__container')[0];
    firstEl.classList.remove('slide__container--left');
    firstEl.classList.remove('slide__container--right');

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.calcScroll.bind(this));
  }

  calcScroll() {
    const elements = document.getElementsByClassName('slide__container');
    for (let i = 0; i < elements.length; i++) {
      let el = elements[i];
      if (inView(el)) {
        el.classList.add('slide__container--animated');
      } else {
        el.classList.remove('slide__container--animated');
      }
    }
  }

  setClases(imgs) {
    // eslint-disable-next-line default-case
    switch(imgs.length) {
      case 1: 
      return 'slide__img slide__img--full-in-view';
      case 2: 
      return 'slide__img slide__img--half-in-view';
      case 3:
      return 'slide__img slide__img--tree-in-view';
      case 4:
      return 'slide__img slide__img--four-in-view';
      default:
      return 'slide__img';
    }
  }

  render() {
    //classnames  index % 2 === 0 ? 'slide__container slide__container--left' : 'slide__container slide__container--right
    return <div id={this.props.ids} className="slide">
      {slides.map((slide, index) => {
          return <div
            key={uuidv1()}
            className={index > 1 && index % 2 === 0 ? "slide__container slide__container--left" : "slide__container slide__container--right" }>
            <div className="slide__title">
              <span>{slide.slideTitle}</span>
            </div>
            <div className="slide__images">
              {slide.slideImgs.map((item) =>
                 <div
                  key={uuidv1()}
                  className={item.rotated ? "slide__img slide__img--rotated" : "slide__img"}>
                  <img src={this.state.images[item.img]} alt="img" />
                  <div className="slide__remarks-holder">
                    <span className="slide__remarks">{item.remark}</span>
                  </div>
                </div>)}
              {slide.imgs ? slide.imgs.map((item) =>
                <div className="slide__images">
                  <div
                    key={uuidv1()}
                    className={item.rotated ? "slide__img slide__img--rotated" : "slide__img"}>
                    <img src={this.state.images[item.img]} alt="img" />
                    <div className="slide__remarks-holder slide__remarks-holder--contra-rotated">
                     <span className="slide__remarks">{item.remark}</span>
                    </div>
                  </div>
                </div>
                ) : null }
            </div>   
            <div className="slide__text">
              <span>{slide.slideText}</span>
              <span>{slide.slideRemarks}</span>
              {slide.slideList && slide.slideList.length > 0 ?
                <ul className="slide__list">
                  {slide.slideList.map((item) =>
                    <li key={uuidv1()}>{item.listText}</li>
                  )}
                </ul> : null}
            </div>
          </div>;
        })}
      </div>;
  }
}
