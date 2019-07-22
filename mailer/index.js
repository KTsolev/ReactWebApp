const express = require('express');
const bodyParser = require('body-parser');
// const authRoute = require('./MailController.js');
const app = express();

const mailer = require('./mailer');

// Starting point of the server
function main() {
    const port = process.env.PORT || 8000;
    app.set('views', __dirname );
    app.set('view engine', 'jade');
    app.use(bodyParser.urlencoded({ // Middleware
      extended: true,
    }));
    app.use(bodyParser.json())  

    app.post('/sendmail', function (req, res, next) {
      res.set('Content-Type', 'application/json');
      
      const locals = { userName: req.body.userName };
      const messageInfo = {
        email: req.body.email, fromEmail: 'ktsolev@gmail.com',
        fromName: 'Dental-Info', subject: 'Checkout this awesome droids'
      };
      
      try {
        mailer.sendOne('./', messageInfo, locals);
      } catch(err) {
        console.log(err); 
        res.send({ success: false, error: err });    
      }
    
      res.send({ success: true, message:'Email sent.' });
    });
  
    app.use(bodyParser.json());
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
  }
  
  main();
  