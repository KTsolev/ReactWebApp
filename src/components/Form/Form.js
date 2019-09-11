import React, { Component } from 'react';
import validate from 'data-validations';
import formValidations from '../Validations/validation';
import store from '../Store/StoreProvider';
import  './Form.scss';

const { StoreContext } = store;

class Form extends Component {
    static context = StoreContext;
    constructor(props) {
      console.log(process.env);
  
      console.log(process.env.NODE_ENV);
        super(props);
        this.state = {
            email: {
              value: '',
              errorMessage: null
            },
            name: {
              value: '',
              errorMessage: null
            },
            subject: {
              value: '',
              errorMessage: null
            },
            message: {
              value: '',
              errorMessage: null
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      const fieldName = event.target.name;
      const fieldValue = event.target.value.trim();
      let validation = null;

      switch(fieldName) {
          case 'name':
            validation =  validate({[fieldName]: fieldValue }, formValidations);
            this.setState({
              name: { 
                value: fieldValue,
                errorMessage: validation.errors && validation.errors.name ? validation.errors.name : null
              }
             });
          break;
          case 'email':
            validation =  validate({[fieldName]: fieldValue }, formValidations);
            this.setState({
               email: { 
                 value: fieldValue,
                 errorMessage: validation.errors && validation.errors.email ? validation.errors.email : null
                }
              });
          break;
          case 'subject':
            validation =  validate({[fieldName]: fieldValue }, formValidations);
            this.setState({ 
              subject: { 
                value: fieldValue,
                errorMessage: validation.errors && validation.errors.subject ? validation.errors.subject : null
              } 
            });
          break;
          case 'message':
            validation =  validate({[fieldName]: fieldValue }, formValidations);
            this.setState({ 
              message: {
                value: fieldValue,
                errorMessage: validation.errors && validation.errors.message ? validation.errors.message : null
              } 
            });
          break;
          default:
          break;
      }
    }
    
    async handleSubmit(event) {
      event.preventDefault();
      console.log(JSON.stringify({
        'email': this.state.email.value,
        'name': this.state.name.value,
        'message': this.state.message.value,
        'subject': this.state.subject.value,
      }));
     
      return fetch('http://localhost:8000/sendmail', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'email': this.state.email.value,
          'name': this.state.name.value,
          'message': this.state.message.value,
          'subject': this.state.subject.value,
        })
       }).then((res) => {
         if(res.status === 200) {
          this.context.setMessage('Съобщението ви бе изпратено успешно!');
          this.context.toggleMessageBox();
          setTimeout((() => {
            this.context.toggleMessageBox();
          }), 3000);
         }
       }).catch((error) => {
          this.context.setMessage('Съобщението ви не бе изпратено! Моля опитайте по късно!');
          this.context.toggleMessageBox();
          setTimeout((() => {
            this.context.toggleMessageBox();
          }), 3000);
       });
    }

    render() {
      return <StoreContext.Consumer>
        { (context) => {
            this.context = context;
            let toDisable = (this.state.name.errorMessage
              || this.state.email.errorMessage
              || this.state.subject.errorMessage
              || this.state.message.errorMessage);
             return <form className="form" onSubmit={this.handleSubmit}>
              <input 
                className={this.state.name.errorMessage ? "col-sm-4 form-control error" : "col-sm-4 form-control"}
                onChange={this.handleChange}
                type="text" 
                name="name" 
                placeholder="Име:" />
              {
                this.state.name.errorMessage ? 
                  <span className="errorMessage">{this.state.name.errorMessage}</span> : null 
              }
              <input 
                className={this.state.email.errorMessage ? "error" : ""} 
                onChange={this.handleChange}
                type="text" 
                name="email"
                placeholder="Email:" />
              {
                this.state.email.errorMessage ? 
                <span className="errorMessage">{this.state.email.errorMessage}</span> : null 
              }
              <input 
                className={this.state.subject.errorMessage ? "error" : ""} 
                onChange={this.handleChange} 
                type="text" 
                name="subject"
                placeholder="Тема:" />
              {
                this.state.subject.errorMessage ?
                 <span className="errorMessage">{this.state.subject.errorMessage}</span> : null 
              }
              <textarea 
                className={this.state.message.errorMessage ? "error" : ""}
                onChange={this.handleChange}
                type="text"
                name="message"
                placeholder="Съобщение:" />
              {
                this.state.message.errorMessage ?
                 <span className="errorMessage">{this.state.message.errorMessage}</span> : null 
              }
              <input 
                type="submit"
                className={toDisable ? "sbm sbm--disabled" : "sbm"}
                name="submit"
                value="Изпрати"
                disabled = {toDisable}
                placeholder="Изпрати:" />
            </form>;
        }}
      </StoreContext.Consumer>
    }
}

export default Form;