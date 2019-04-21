import React, { Component } from 'react';
import services from '../data/Services';
import '../styles/scss/paralaxSlide2.scss';

const { importAll, inView } = services;

class SlideComponent extends Component {

  constructor(props) {
    super(props);
    this.header = props.header;
    this.klass = props.klass;
    this.ids = props.ids;
    this.images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    this.calcScroll = this.calcScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.calcScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.calcScroll);
  }

  calcScroll() {
    const el = document.getElementById('horizontal-scroll');

    if (inView(el)) {
      el.scrollLeft += 12;
    } else {
      el.scrollLeft = 0;
    }
  }

  render() {
    const bgImages = this.props.bgImages.map((image) => this.images[image]);
    return bgImages.length > 1 ?
      <section className='paralax' id={this.props.ids}>
        <section className='paralax paralax--row' id='horizontal-scroll'>
           {bgImages.map((image, idx) =>
             <div
              id={this.ids}
              key={idx}
              style={{ backgroundImage: `url(${image})` }}>
         </div>)}
        </section>
        <h2 className={'paralax__header ' + this.props.klass}>{this.header}</h2>
      </section>
      :
      <section className='paralax'>
         {bgImages.map((image, idx) => <div id={this.ids} key={idx} style={{
           backgroundImage: `url(${image})`,
         }}></div>)}
        <h2 className={'paralax__header ' + this.props.klass}>{this.header}</h2>
      </section>;
  }
}

export default SlideComponent;
