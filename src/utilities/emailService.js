import transporter from '../config/emailConfig.js';

const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'recuperasrch.code@gmail.com',
    to,
    subject,
    text
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

export default sendEmail;