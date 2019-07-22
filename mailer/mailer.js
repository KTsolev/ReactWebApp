const path = require('path');
const templatesDir = path.resolve(__dirname, './views');
const Email = require('email-templates');
const config = require('dotenv').config();

const mailjet = require('node-mailjet').connect(
  config.parsed.API_KEY,
  config.parsed.SECRET_KEY
);

exports.sendEmail = (messageInfo, text, html) => {
  try{
     return mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: { Email: messageInfo.fromEmail, Name: messageInfo.fromName },
          To: [ { Email: 'ktsolev@yahoo.com', Name: 'Konstantin' } ],
          Subject: messageInfo.subject,
          Email: messageInfo.email,
          TextPart: text,
          HTMLPart: html
        }
      ]
    });
  } catch(err) {
    console.log(err);
  }
};

exports.sendOne = async (templateName, messageInfo, locals) => {
   // @ts-ignore
   const email = new Email({ views: { root: templatesDir, options: { extension: 'jade' } }});
    return Promise.all([
      email.render(`${templateName}/email`, locals),
    ])
    .then(([html, text]) => {
      return this.sendEmail(messageInfo, text, html);
    })
    .catch(console.error);
};
