import React, { Component } from 'react';
import {min, max, required, validEmail, onlyLetters } from '../Validations/validation';
import store from '../Store/StoreProvider';
import  './Form.scss';

const { StoreContext } = store;

class Form extends Component {
  constructor(props) {
    super(props);
    this.context = StoreContext;
      
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
            },
            isSending: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      const fieldName = event.target.name;
      const fieldValue = event.target.value.trim();
      
      let error = null;
      
      switch(fieldName) {
          case 'name':
            error = required(fieldValue, 'Име е задължително поле!')
            || min(fieldValue, 2, 'Името трябва да е минимум 2 символа!')
            || max(fieldValue, 30, 'Името трябва да е максимум 30 символа!')
            || onlyLetters(fieldValue, 'Името може да съдържа само букви или \'-\'!');

            if(error) {
              this.setState({
                name: { 
                  value: fieldValue,
                  errorMessage: error,
                }
               });
            } else {
              this.setState({
                name: { 
                  value: fieldValue,
                  error: null
                }
               });
            }
          break;
          case 'email':
              error = required(fieldValue, 'Имейлът е задължително поле!')
              || min(fieldValue, 2, 'Имейлът трябва да е минимум 2 символа!')
              || max(fieldValue, 20, 'Имеилът трябва да е максимум 20 символа!')
              || validEmail(fieldValue, 'Въвели сте не валиден емайл!')
              
              if(error) {
                this.setState({
                  email: {
                    value: fieldValue,
                    errorMessage: error,
                  }
                 });
              } else {
                this.setState({
                  email: { 
                    value: fieldValue,
                    error: null
                  }
                 });
              }
          break;
          case 'subject':
              error = min(fieldValue, 2, 'Тема трябва да е минимум 2 символа!') || 
              max(fieldValue, 60, 'Тема трябва да е максимум 60 символа!');
              
              if(error) {
                this.setState({
                  subject: { 
                    value: fieldValue,                    
                    errorMessage: error,
                  }
                 });
              } else {
                this.setState({
                  subject: { 
                    value: fieldValue,
                    error: null
                  }
                 });
              }
          break;
          case 'message':
              error = required(fieldValue, 'Съобщение е задължително поле!') ||
              min(fieldValue, 2, 'Съобщение трябва да е минимум 2 символа!');
              
              if(error) {
                this.setState({
                  message: { 
                    value: fieldValue,
                    errorMessage: error,
                  }
                 });
              } else {
                this.setState({
                  message: { 
                    value: fieldValue,
                    error: null
                  }
                 });
              }
          break;
          default:
          break;
      }
    }
    
    handleSubmit(event) {
      const BASEURL = process.env.BASEURL || "http://localhost";
      const PORT = process.env.BASEURL || 8000;
      const ENDPOINT = process.env.BASEURL || "sendmail";
      this.setState({ isSending: true });

      event.preventDefault();
  
      return fetch(`${BASEURL}:${PORT}/${ENDPOINT}`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.email.value,
          name: this.state.name.value,
          message: this.state.message.value,
          subject: this.state.subject.value
        })
      })
        .then(res => {
          if (res.status === 200) {
            this.context.setMessage("Съобщението ви бе изпратено успешно!");
            this.context.toggleMessageBox();
            setTimeout(() => {
              this.context.toggleMessageBox();
              this.setState({ isSending: false });
            }, 3000);
          }
        })
        .catch(error => {
          console.log(error)
          this.context.setMessage(
            "Съобщението ви не бе изпратено! Моля опитайте по късно!"
          );
          this.context.toggleMessageBox();
          setTimeout(() => {
            this.context.toggleMessageBox();
            this.setState({ isSending: false });
          }, 3000);
        });
    }

    render() {
      return <StoreContext.Consumer>
        { (context) => {
            this.context = context;
            let toDisable = (this.state.name.errorMessage
              || this.state.email.errorMessage
              || this.state.subject.errorMessage
              || this.state.message.errorMessage
              || this.state.isSending);
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