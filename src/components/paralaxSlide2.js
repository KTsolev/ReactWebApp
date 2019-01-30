import React, { Component } from 'react';
import TextComponent from './textComponent';
import ImageComponent from './imageComponent';
import '../styles/scss/paralaxSlide2.scss';

class SlideComponent extends Component {

 constructor(props) {
   super(props);
   this.header = props.header;
   this.klass = props.klass;
   this.images = this._importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
 }

 _importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

 render() {

   return (
     <section className={this.klass}>
         <div className='container row'>
           <h2>{this.header}</h2>
         </div>
         <div className="row">
          <ImageComponent src={this.images['DSC01640.jpg']} alt="kabinet" klass="item col"/>
          <ImageComponent src={this.images['DSC01642.jpg']} alt="kabinet" klass="item col"/>
          <ImageComponent src={this.images['DSC01644.jpg']} alt="kabinet" klass="item col"/>
          <ImageComponent src={this.images['DSC01645.jpg']} alt="kabinet" klass="item col"/>
          <ImageComponent src={this.images['DSC03434.jpg']} alt="kabinet" klass="item col"/>
         </div>
     </section>
   );
 }
}

export default SlideComponent;
