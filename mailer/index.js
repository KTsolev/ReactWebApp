const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Joi = require('joi');
const schema = require('./validations');
// const authRoute = require('./MailController.js');
const app = express();

const mailer = require('./mailer');

const whitelist = ['http://localhost:3000', 'localhost:8000' ];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

  
app.use(bodyParser.json());
app.use(errorHandler);
app.use(logErrors);

// Starting point of the server
function main() {
    const port = process.env.PORT || 8000;
    app.set('views', __dirname + '/views');
  
    app.set('view engine', 'jade');
    app.use(bodyParser.urlencoded({ // Middleware
      extended: true,
    }));
    app.use(bodyParser.json());
    app.use(cors());

    app.post('/sendmail', async (req, res, next) => {
      res.set('Content-Type', 'application/json');
      
      const locals = {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
       };

      const validationOptions = {
        abortEarly: false, // abort after the last validation error
        allowUnknown: true, // allow unknown keys that will be ignored
        stripUnknown: true // remove unknown keys from the validated data
     };
       
     Joi.validate(req.body, schema, validationOptions,function (err, value) {
        console.log(req.body)
        if (err) {
          next (err);
        } else {
          return res.json({
            status: 'success',
            message: 'User message was successfully sent',
            data: Object.assign({}, value)
          });
        }
      });

      const messageInfo = {
        email: req.body.email, fromEmail: 'ktsolev@gmail.com',
        fromName: 'Dental-Info', subject: req.body.subject
      };
    
      await mailer.sendOne('email', messageInfo, locals);
      res.send({ success: true, message:'Email sent.' });
  
    });
  
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
  }
  
 function errorHandler(err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err });
 }

 function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}
  
main();
 
 