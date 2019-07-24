import React, { Component } from 'react';
import ImageComponent from '../ImageComponent/imageComponent';
import services from '../../Services/Services';
import './Sertificates.scss';

const { importAll } = services;

class SertificatesSlide extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expandArea: false,
    };

    this.header = props.header;
    this.klass = props.klass;
    this.images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
    this.toggleArea = this.toggleArea.bind(this);
  }

  toggleArea() {
    this.setState({ expandArea: !this.state.expandArea });
  }

  render() {
    let sertificates = [];
    let expanded =  `sertificates ${this.state.expandArea ? 'sertificates--expanded' : ''}`;
    for (let i = 1; i <= 22; i++) {
      sertificates.push(this.images[`${i}.jpg`]);
    }

    return (
     <section className={this.klass}>
       <div className='header'>
         <h2>{this.header}</h2>
       </div>
       <div className={expanded}>
        {sertificates.map((item, index) =>
            <div className="sertificate" key={index}>
              <ImageComponent src={item} alt="kabinet" klass="item"/>
            </div>
          )}
       </div>
       <div className="expand-area" onClick={this.toggleArea}>
        {this.state.expandArea ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}
       </div>
     </section>
    );
  }
}

export default SertificatesSlide;
