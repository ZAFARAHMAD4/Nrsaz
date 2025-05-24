const nodemailer = require("nodemailer");
require("dotenv").config();
const express=require("express")


const sendQuote = async (req, res) => {
  const { name, email, service, budget, deadline, message } = req.body;
  const file = req.file;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Quote Request from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Service: ${service}
Budget: ${budget}
Deadline: ${deadline}
Message: ${message}
      `,
      attachments: file
        ? [
            {
              filename: file.originalname,
              content: file.buffer,
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Quote email error:", error);
    res.status(500).json({ success: false });
  }
};

module.exports = sendQuote;
