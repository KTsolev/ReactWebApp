import React, { Component } from 'react';
import Slide from './Slide';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import '../styles/scss/slider.scss';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.images = this._importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    this.slides = this.generateSlides();
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  render() {
    console.log(this.state);
    return (
      <div className='slider'>
        <div className='slider-wrapper'
          style={{
            transition: 'transform ease-out 0.45s',
          }}>
          <Slide key={this.state.index} slide={this.slides[this.state.index]} />
        </div>
        <div className='slide-controls'>
          <div onClick={this.nextSlide}>
            <RightArrow />
          </div>
          <div onClick={this.previousSlide}>
            <LeftArrow />
          </div>
        </div>
      </div>
    );
  }

  nextSlide() {
    this.setState(() => {
        if (this.state.index > this.slides.length - 1) {
          this.state.index = 0;
        }

        this.state.index += 1;
      });
    this.forceUpdate();
  }

  previousSlide() {
    this.setState(() => {
        if (this.state.index <= 0) {
          this.state.index = this.slides.length - 1;
        }

        this.state.index -= 1;
      });
    this.forceUpdate();
  }

  generateSlides() {
    let slides = [];
    let slide1 = {
      display: 'block',
      width: '450px',
      height: '450px',
      backgroundImage: 'url(' + this.images['bg1.jpg'] + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
    let slide2 = {
      display: 'block',
      width: '450px',
      height: '450px',
      backgroundImage: 'url(' + this.images['bg2.jpg'] + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
    let slide3 = {
      display: 'block',
      width: '450px',
      height: '450px',
      backgroundImage: 'url(' + this.images['bg3.jpg'] + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
    let slide4 = {
      display: 'block',
      width: '450px',
      height: '450px',
      backgroundImage: 'url(' + this.images['bg4.jpg'] + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
    let slide5 = {
      display: 'block',
      width: '450px',
      height: '450px',
      backgroundImage: 'url(' + this.images['bg5.jpg'] + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
    let slide6 = {
      display: 'block',
      backgroundImage: 'url(' + this.images['DSC3578.jpg'] + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
    slides.push(slide1);
    slides.push(slide2);
    slides.push(slide3);
    slides.push(slide4);
    slides.push(slide5);
    slides.push(slide6);
    return slides;
  }

  _importAll(r) {
    let images = [];
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });

    return images;
  }
}
