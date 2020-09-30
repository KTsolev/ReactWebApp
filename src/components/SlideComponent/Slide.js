import React, { Component } from 'react';
import slides from '../../data/slides.json';
import { v4 as uuidv4 } from 'uuid';
import services from '../../Services/Services';
import { Card } from '../Card/Card';
import './slide.scss';

const { importAll } = services;
const html = document.documentElement;
let height = 0;
let h = 0;


export default class Slide extends Component {
  constructor(props) {
      super(props);
      this.state = {
        images: importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/)),
      };
      this.resize=this.resize.bind(this);
      this.initiateHeights=this.initiateHeights.bind(this);
      this.onWheelHandler = this.onWheelHandler.bind(this);
  }

  componentDidMount () {
    const scroller = document.getElementById("slider");
    window.addEventListener('resize', this.initiateHeights);
    scroller.addEventListener("mousewheel", this.onWheelHandler, false);
    scroller.addEventListener("wheel", this.onWheelHandler, false);

  }

  componentWillUnmount () {
    let scroller = document.getElementById("slider");
    scroller.removeEventListener("mousewheel", this.onWheelHandler);
    scroller.removeEventListener("wheel", this.onWheelHandler);
    window.removeEventListener('resize', this.initiateHeights);
  }

  onWheelHandler(e) {
    const scrollSpeed = 25;
    const scroller = document.getElementById("slider");
    const main = document.getElementById("main");
    const indicator = document.getElementById('indicator');
    console.log('in handler');
    const domRect = scroller.getBoundingClientRect();
    if (e.wheelDelta >= 0) {
      scroller.scrollTop = domRect.bottom;
    }
    else {
        scroller.scrollTop = main.offsetTop - scroller.scrollHeight;
    }
    // block if e.deltaY==0
    if( !e.deltaY ) return;
    // Set scrollDirection (-1 = up // 1 = down)
    let scrollDirection = (e.deltaY > 0) ? 1 : -1;
    // convert vertical scroll into horizontal
    scroller.scrollLeft += scrollSpeed * scrollDirection;
    let scrollLeft = scroller.scrollLeft;
    console.log(scroller.scrollLeft,  scrollSpeed * scrollDirection);
    // calculate box total vertical scroll 
    let maxScrollLeft = Math.round( scroller.scrollWidth - scroller.clientWidth );
    // if element scroll has not finished scrolling
    // prevent window to scroll
    this.resize(indicator);

    if( 
      (scrollDirection === -1  && scrollLeft > 0) ||
      (scrollDirection === 1 && scrollLeft < maxScrollLeft ) 
    ) {
      e.preventDefault();
      e.stopPropagation();
      console.log('prevent default');
    }
    // done!
    return true;
  }

  resize (e) {
    const main = document.getElementById('slider')
    const scrolled = main.scrollLeft / main.scrollWidth;
    scrolled > 0 ? e.style.width = ((scrolled * 100)+ 7) + "%" : e.style.width = 0 + "%";
  }

  initiateHeights () {
    height = Math.max( document.body.scrollHeight, document.body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    console.log("heights were initialised:", height, h);
  }


  render() {
    const options = {
      random: [
        0x10,
        0x91,
        0x56,
        0xbe,
        0xc4,
        0xfb,
        0xc1,
        0xea,
        0x71,
        0xb4,
        0xef,
        0xe1,
        0x67,
        0x1c,
        0x58,
        0x36,
      ],
    };


    return <div id={this.props.ids} className="slide_holder">
        <h1>Портфолио</h1>
        <h3>Най-често практикувани случаи от д-р Анна Цолева</h3>
        <div id="indicator"></div>
        <div className="slide">
          <div id="slider" className="slide__container">
              {slides.map((slide, index) => {
              return slide.slideImgs.map((elem) => <Card 
                      key={uuidv4(options)}
                      image={this.state.images[elem.img]}
                      rotated={elem.rotated}
                      title={slide.slideTitle}
                      text={slide.slideText}
                      remarks={elem.remark}
                      list={slide.slideList}
                    />)
                  })}
            </div>
        </div>
      </div>
  }
}
