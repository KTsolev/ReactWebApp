import React, { Component } from 'react';
import  './ContactSlide.scss';

import GoogleMaps from '../GoogleMapComponent/GoogleMaps';

class ContactsSlide extends Component {

  render() {
    return (
      <div id={this.props.ids} className={this.props.klass}>
        <div className="header">
          <h2 className='text-holder__header header'>Контакти</h2>
          <h3 className='text-holder__header header'>Бладоря за вашето внимание!</h3>
          <h4 className='text-holder__header header'>Ако имате въпроси може да направите запитване във формата по-долу.</h4>
        </div>
        <div className="main">
          <ul className="list">
            <li>
              <h3>tel:</h3>
              <h3>(+359)/721/66933</h3>
            </li>
            <li>
              <h3>GSM:</h3>
              <h3>(+359)/889 81 20 27</h3>
            </li>
            <li>
              <h3>Email:</h3>
              <h3>atzoleva@abv.bg</h3>
            </li>
            <li>
              <h3>Адрес:</h3>
              <h3>гр.Костинброд ул."Христо Ботев"16</h3>
            </li>
          </ul>
          <form className="form" role="form">
            <input type="text" className="col-sm-4 form-control" name="name" placeholder="Име:" />
            <input type="text" className="col-sm-4 form-control" name="emeil" placeholder="Email:" />
            <input type="text" className="col-sm-4 form-control" name="subject" placeholder="Тема:" />
            <textarea type="text" className="col-sm-4 form-control" name="message" placeholder="Съобщение:" />
            <input type="submit" className="col-sm-4 form-control sbm" name="submit" placeholder="Изпрати:" />
          </form>
        </div>
        <div className="col-md-12 col-sm-6 map-holder">
          <GoogleMaps />
        </div>
      </div>
          );
  }
}

export default ContactsSlide;
