const nodemailer = require('nodemailer');

const sendEmail = async options => {
  //CREATE A TRANSPORTER 
  const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
  })
  //DEFINE THE EMAIL OPTIONS
  const mailOption = {
    from: process.env.EMAIL_FROM,
    to: options.email,
    subject: options.subjext,
    text: options.message

  }
  //SEND EMAIL WITH NODEMAILER
  transporter.sendMail(mailOption)
};

module.exports = sendEmail