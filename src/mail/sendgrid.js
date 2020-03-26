const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API);
const msg = {
  to: 'similoluwa.odeyemi@gmail.com',
  from: 'similoluwa.odeyemi@gmail.com',
  subject: 'Testing sendgrid',
  text: 'sending from Node.js',
 // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);