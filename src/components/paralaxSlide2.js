import React, { Component } from 'react';
import services from '../Services/Services';
import '../styles/scss/paralaxSlide2.scss';
import $ from 'jquery';

const { importAll, inView } = services;

class SlideComponent extends Component {

  constructor(props) {
    super(props);
    this.header = props.header;
    this.klass = props.klass;
    this.ids = props.ids;
    this.images = importAll(require.context('../images', false, /\.(png|jpe?g|svg|mp4)$/));
    this.calcScroll = this.calcScroll.bind(this);
    this.triggerAnimation = this.triggerAnimation.bind(this);

  }

  componentDidMount() {
    window.addEventListener('scroll', this.calcScroll);
    window.addEventListener('scroll', this.triggerAnimation);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.calcScroll);
    window.removeEventListener('scroll', this.triggerAnimation);
  }

   
  triggerAnimation(event) {
    const parent = document.getElementsByClassName('span__holder');
    const videoParent = $('.paralax .paralax--row video');
    let scrollTop = $(window).scrollTop();
    let elementOffset = $(parent).offset().top;
    let currentElementOffset = (elementOffset - scrollTop);
    console.log(videoParent)
    if (inView(videoParent[0])) {
      console.log('inview 0')
      videoParent[0].play();
    } else if(inView(videoParent[1])){
      console.log('inview 1')

      videoParent[1].play();
    } else if(inView(videoParent[2])){
      console.log('inview 2')
      
      videoParent[2].play();
    }
  }


  calcScroll(event) {
    const el = document.getElementById('horizontal-scroll');
    if (inView(el)) {
      el.scrollLeft += 22;
    } else {
      el.scrollLeft = 0;
    }
  }

  render() {
    const bgImages = this.props.bgImages.map((image) => this.images[image]);
    const textAnim = this.props.textAnim ? this.props.textAnim.map((text, index) => {
      return <li key={index}>{text.split('').map((l,i) => <span key={i}>{l}</span>)}</li>;
    }) : [];
    return <section className="paralax" id={this.props.ids}>
        <section className="paralax paralax--row" id="horizontal-scroll">
           {bgImages.map((image, idx) => image && image.endsWith('mp4') ? 
           <video key={'video'+idx}className={this.ids} muted>
              <source src={image} type="video/mp4"/>
           </video> :
           this.props.movable ? 
            <div className={this.ids + ' parallaxElem'} key={'pe'+idx} style={{backgroundImage: `url(${image})`}}></div> :
            <div className={this.ids} key={'div'+idx} style={{backgroundImage: `url(${image})`}}></div>
          )}
        </section>
        <h2 className={this.props.klass}>{this.header}</h2>
        {textAnim && textAnim.length > 0 ? <ul className="span__holder">{textAnim}</ul> : null}
      </section>;
  }
}

export default SlideComponent;
