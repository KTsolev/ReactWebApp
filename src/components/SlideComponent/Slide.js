import React, { Component } from 'react';
import slides from '../../data/slides.json';
import { v1 as uuidv1 } from 'uuid';
import services from '../../Services/Services';
import './slide.scss';
import $ from 'jquery';
import { Slider } from 'material-ui';

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
        console.log('Scroll up');
        scroller.scrollTop = domRect.bottom;
      }
      else {
          console.log('Scroll down');
          console.log(main.offsetTop - scroller.scrollHeight);
          scroller.scrollTop = main.offsetTop - scroller.scrollHeight;
      }
      // block if e.deltaY==0
      if( !e.deltaY ) return;
      // Set scrollDirection (-1 = up // 1 = down)
      let scrollDirection = (e.deltaY > 0) ? 1 : -1;
      // convert vertical scroll into horizontal
      scroller.scrollLeft += scrollSpeed * scrollDirection;
      console.log(scroller.scrollLeft, scrollSpeed*scrollDirection);
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
    console.log(scrolled);
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
             {slides.map((slide, index) => {
          return <div
              key={uuidv1()}
              className="slide__container">
              <div className="slide__title">
                <span>{slide.slideTitle}</span>
              </div>
              {slide.slideText && <div className="slide__text">
                <span>{slide.slideText}</span>
                {slide.slideRemarks && <span>{slide.slideRemarks}</span>}
                {slide.slideList && slide.slideList.length > 0 ?
                  <ul className="slide__list">
                    {slide.slideList.map((item) =>
                      <li key={uuidv1()}>{item.listText}</li>
                    )}
                  </ul> : null}
              </div>}
              <div className="slide__images">
                {slide.slideImgs.map((elem) =>{
                  let paddingTop= 0;
                  const img = new Image();
                  img.onload = function() {
                    paddingTop= Math.ceil((this.height / this.width)*100);
                  }
                  img.src= this.state.images[elem.img];
                
                  return (<div
                    key={uuidv1()}
                    style={{
                      height: elem.rotated ? '15em' : '20em',
                      paddingTop: Math.ceil(paddingTop/16)+ 'em',
                      backgroundImage: "url("+this.state.images[elem.img]+")"
                    }}
                    className={elem.rotated ? "slide__img slide__img--rotated" : "slide__img"}>
                    <div className="slide__remarks-holder">
                      <span className="slide__remarks">{elem.remark}</span>
                    </div>
                  </div>)
                })}
              </div>   
            </div>;
          })}
        </div>
      </div>;
  }
}
