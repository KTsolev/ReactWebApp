import React, { Component } from 'react';
import services from '../Services/Services';
import '../styles/scss/paralaxSlide2.scss';

const { importAll } = services;

class SlideComponent extends Component {

  constructor(props) {
    super(props);
    this.header = props.header;
    this.klass = props.klass;
    this.ids = props.ids;
    this.images = importAll(require.context('../images', false, /\.(png|jpe?g|svg|mp4)$/));
  }

  render() {
    const bgImages = this.props.bgImages.map((image) => this.images[image]);
    const textAnim = this.props.textAnim ? this.props.textAnim.map((text, index) => {
      return <li key={index}>{text.split('').map((l,i) => <span key={i}>{l}</span>)}</li>;
    }) : [];
    return <section className="paralax" id={this.props.ids}>
        <section className="paralax paralax--row">
           {bgImages.map((image, idx) => {
              let paddingTop= 0;
              const img = new Image();
              img.onload = function() {
                paddingTop= Math.ceil((this.height / this.width)*100);
              }
              img.src= this.images[image];
              return (
                image && image.endsWith('mp4') ? 
                <video key={'video'+idx}className={this.ids} muted>
                  <source src={image} type="video/mp4"/>
                </video> :
                this.props.movable ? 
                <div className={this.ids + ' parallaxElem'} key={'pe'+idx} style={{backgroundImage: `url(${image})`, paddingTop: Math.ceil(paddingTop/16)+'em' }}></div> :
                <div className={this.ids} key={'div'+idx} style={{backgroundImage: `url(${image})`}}></div>
              )
          })}
        </section>
        <h2 className={this.props.klass}>{this.header}</h2>
        {textAnim && textAnim.length > 0 ? <ul id="horizontal-scroll" className="span__holder">{textAnim}</ul> : null}
      </section>;
  }
}

export default SlideComponent;
