import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ message: "Method Not Allowed", success: false });
  }

  const { name, email, description, subject, phone } = req.body;

  // Replace the following with your email configuration
  const transporter = nodemailer.createTransport({
    service: "Gmail", // e.g., Gmail, Outlook, etc.
    auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.FROM_PASSWORD,
    },
  });
  // HTML content of the email
  const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>New Query from ${name}</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #f9f9f9;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      }
      h1 {
        color: #007BFF;
        font-size: 28px;
        margin-bottom: 20px;
      }
      p {
        font-size: 16px;
        margin-bottom: 10px;
      }
      .highlight {
        background-color: #f1f1f1;
        padding: 5px 10px;
        border-radius: 5px;
      }
      .footer {
        margin-top: 30px;
        text-align: center;
        color: #777;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>New Query from ${name}</h1>
      <p>Hi there,</p>
      <p>A new query has been submitted:</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Email:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${subject}</p>
      <p><strong>Description:</strong></p>
      <div class="highlight">
        <p>${description}</p>
      </div>
    </div>
    <div class="footer">
      <p>Have a nice day!</p>
    </div>
  </body>
  </html>
  
`;

  // Setup email data with HTML content
  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL, // Replace with your email address
    subject: `New Query from ${name}`,
    text: `Hi, My name is ${name}\nMy email: ${email}\n${description}\n\n\n`,
    html: htmlContent, // Add the HTML content to the mailOptions
  };
  try {
    await transporter.sendMail(mailOptions);
    return res
      .status(200)
      .json({ message: "Email sent successfully!", success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      message: "An error occurred while sending the email.",
      success: false,
    });
  }
}
