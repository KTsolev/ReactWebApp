import React, { Component } from 'react';
import  './ContactSlide.scss';
import GoogleMaps from '../GoogleMapComponent/GoogleMaps';
import Form from '../Form/Form';

class ContactsSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      name: '',
      subject: '',
      message: ''
    };
  }
 
  render() {
    return (
      <div id={this.props.ids} className={this.props.klass}>
        <div className="header">
          <h3 className='text-holder__header header'>Бладоря за вашето внимание!</h3>
          <h4 className='text-holder__header header'>Ако имате въпроси може да направите запитване във формата по-долу.</h4>
        </div>
        <div className="main">
         <Form />
        </div>
        <div className="map-holder">
          <GoogleMaps />
        </div>
      </div>
          );
  }
}

export default ContactsSlide;
