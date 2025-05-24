const nodemailer = require("nodemailer");
require("dotenv").config();

const sendOrder = async (req, res) => {
  const { name, email, message, service } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Format features into bullet points
    const formattedFeatures = service.features?.map((f, i) => `- ${f}`).join('\n') || 'No features listed';

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Order: ${service.name}`,
      text: `
New Order Received:

Name: ${name}
Email: ${email}

--- Selected Package ---
Package: ${service.name}
Price: ${service.price}
Features:
${formattedFeatures}

--- User Message ---
${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending order email:", error);
    res.status(500).json({ success: false });
  }
};

module.exports = sendOrder;
