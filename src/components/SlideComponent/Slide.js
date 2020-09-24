import React, { Component } from 'react';
import slides from '../../data/slides.json';
import { v1 as uuidv1 } from 'uuid';
import services from '../../Services/Services';
import './slide.scss';

const { importAll } = services;

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/)),
    };
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
    return <div id={this.props.ids} className="slide">
      {slides.map((slide, index) => {
          return <div
              key={uuidv1()}
              className="slide__container">
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
                  <div key={uuidv1()} className="slide__images">
                    <div className={item.rotated ? "slide__img slide__img--rotated" : "slide__img"}>
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
