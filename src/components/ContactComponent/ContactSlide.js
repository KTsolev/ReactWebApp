import React, { Component } from 'react';
import  './ContactSlide.scss';
import GoogleMaps from '../GoogleMapComponent/GoogleMaps';

class ContactsSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      name: '',
      subject: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch(event.target.name) {
      case 'name':
        this.setState({ name: event.target.value });
      break;
      case 'email':
        this.setState({ email: event.target.value });
      break;
      case 'subject':
        this.setState({ subject: event.target.value });
      break;
      case 'message':
        this.setState({ message: event.target.value });
      break;
      default:
      break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
 
  render() {
    return (
      <div id={this.props.ids} className={this.props.klass}>
        <div className="header">
          <h3 className='text-holder__header header'>Бладоря за вашето внимание!</h3>
          <h4 className='text-holder__header header'>Ако имате въпроси може да направите запитване във формата по-долу.</h4>
        </div>
        <div className="main">
          <form className="form" role="form" onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} className="col-sm-4 form-control" name="Name*" placeholder="Име:" />
            <input type="text" onChange={this.handleChange} className="col-sm-4 form-control" name="Email*" placeholder="Email:" />
            <input type="text" onChange={this.handleChange} className="col-sm-4 form-control" name="Subject*" placeholder="Тема:" />
            <textarea type="text" onChange={this.handleChange} className="col-sm-4 form-control" name="Message*" placeholder="Съобщение:" />
            <input type="submit" className="col-sm-4 form-control sbm" name="submit" value="Изпрати " placeholder="Изпрати:" />
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
