const nodemailer = require('nodemailer');
require('dotenv').config();

const sendMail = async (req, res) => {
  const { name, email, service, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name} - ${service}`,
      text: `
Name: ${name}
Email: ${email}
Service: ${service}
Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error("Send Mail Error:", error);
    res.status(500).json({ success: false, message: 'Email sending failed' });
  }
};

module.exports = sendMail;
