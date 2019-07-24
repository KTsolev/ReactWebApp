const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const authRoute = require('./MailController.js');
const app = express();

const mailer = require('./mailer');

const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


// Starting point of the server
function main() {
    const port = process.env.PORT || 8000;
    app.set('views', __dirname + '/views');
  
    app.set('view engine', 'jade');
    app.use(bodyParser.urlencoded({ // Middleware
      extended: true,
    }));
    app.use(bodyParser.json());
    app.use(cors(corsOptions));

    app.post('/sendmail', async (req, res, next) => {
      res.set('Content-Type', 'application/json');
      
      const locals = {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
       };
      
       const messageInfo = {
        email: req.body.email, fromEmail: 'ktsolev@gmail.com',
        fromName: 'Dental-Info', subject: req.body.subject
      };
    
      try {
        await mailer.sendOne('email', messageInfo, locals);
        res.send({ success: true, message:'Email sent.' });
      } catch(error) {
        console.log(error);
        res.send({ success: false, error: 'Something went wrong! Email wans\'t sent' });    
      }    
    });

    app.use(bodyParser.json());
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
  }
  
 main();
  