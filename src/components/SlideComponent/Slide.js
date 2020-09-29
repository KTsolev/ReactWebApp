import React, { Component } from 'react';
import slides from '../../data/slides.json';
import { v1 as uuidv1 } from 'uuid';
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
  }

  componentDidMount () {
    const scrollSpeed = 25;
    const scroller = document.getElementById("slider");
    const main = document.getElementById("main");
    const indicator = document.getElementById('indicator');
    window.addEventListener('resize', this.initiateHeights);

    const domRect = scroller.getBoundingClientRect();
    scroller.addEventListener("mousewheel", e=>{
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
      let scrollLeft = Math.round(scroller.scrollLeft);
      // calculate box total vertical scroll 
      let maxScrollLeft = Math.round( scroller.scrollWidth - scroller.clientWidth );
      // if element scroll has not finished scrolling
      // prevent window to scroll
      this.resize(indicator); 

      if( 
        (scrollDirection === -1  && scrollLeft > 0) ||
        (scrollDirection === 1 && scrollLeft < maxScrollLeft ) 
      ) e.preventDefault()
      // done!
      return true;
    }, false);
  }

  componentWillUnmount () {
    let scroller = document.getElementById("slider");
    scroller.removeEventListener("mousewheel");
    window.removeEventListener('resize', this.initiateHeights);
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
    return <div id={this.props.ids} className="slide_holder">
        <h1>Портфолио</h1>
        <h3>Най-често практикувани случаи от д-р Анна Цолева</h3>
        <div id="indicator"></div>
        <div id="slider" className="slide">
        <div className="slide__container">
             {slides.map((slide, index) => {
             return slide.slideImgs.map((elem) => <Card 
                    key={uuidv1()}
                    image={this.state.images[elem.img]}
                    rotated={elem.rotated}
                    title={slide.slideTitle}
                    text={slide.slideText}
                    remarks={elem.remark}
                    list={slide.slideList}
                  />)
                })}
          </div>;
        </div>
      </div>;
  }
}
