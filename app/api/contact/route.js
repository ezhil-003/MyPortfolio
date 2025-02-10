import axios from 'axios';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create and configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY, 
  },
});

// Helper function to send a message via Telegram
// async function sendTelegramMessage(token, chat_id, message) {
//   const url = `https://api.telegram.org/bot${token}/sendMessage`;
//   try {
//     const res = await axios.post(url, {
//       text: message,
//       chat_id,
//     });
//     return res.data.ok;
//   } catch (error) {
//     console.error('Error sending Telegram message:', error.response?.data || error.message);
//     return false;
//   }
// };

// HTML email template
const generateEmailTemplate = (name, email, userMessage) => `
<div style="
  font-family: 'Segoe UI', Arial, sans-serif;
  color: #2d3748;
  padding: 30px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
">
  <div style="
    max-width: 600px;
    margin: 0 auto;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  ">
    <!-- Header with Gradient -->
    <div style="
      background: linear-gradient(45deg, #3b82f6 0%, #6366f1 100%);
      padding: 30px;
      text-align: center;
    ">
    
     <div style="position: relative; z-index: 2;">
        <h1 style="
          color: white;
          margin: 0;
          font-size: 28px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        ">
          Some Body Wants to Ping You!! 
        </h1>
      </div>
    </div>

    <!-- Content Area -->
    <div style="padding: 30px;">
      <div style="
        background: #f8fafc;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 25px;
      ">
        <div style="display: flex; align-items: center; margin-bottom: 15px;">
          <div>
            <h2 style="margin: 0; color: #1e293b; font-size: 20px;">${name}</h2>
            <p style="margin: 0; color: #64748b; font-size: 14px;">${email}</p>
          </div>
        </div>

        <div style="
          background: white;
          border-left: 4px solid #3b82f6;
          padding: 15px;
          border-radius: 4px;
          margin: 15px 0;
        ">
          <p style="
            margin: 0;
            color: #475569;
            line-height: 1.6;
            font-size: 15px;
          ">${userMessage}</p>
        </div>
      </div>

      <!-- Reply Button -->
      <div style="text-align: center; margin-top: 25px;">
        <a href="mailto:${email}" 
           style="
             display: inline-block;
             background: linear-gradient(45deg, #ec4899 0%, #8b5cf6 100%);
             color: white;
             padding: 12px 30px;
             border-radius: 6px;
             text-decoration: none;
             font-weight: 500;
             transition: transform 0.2s ease;
           "
           onmouseover="this.style.transform='translateY(-2px)'"
           onmouseout="this.style.transform='none'">
          Reply to ${name.split(' ')[0]}
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="
      background: #f1f5f9;
      padding: 20px;
      text-align: center;
      color: #64748b;
      font-size: 12px;
    ">
      <p style="margin: 5px 0;">© ${new Date().getFullYear()} Ezhil Sivaraj SR</p>
      <p style="margin: 5px 0;">Trichy, Tamil Nadu, India.</p>
    </div>
  </div>
</div>
`;

// Helper function to send an email via Nodemailer
async function sendEmail(payload, message) {
  const { name, email, message: userMessage } = payload;

  const capitalizedname  = name.toUpperCase()
  
  const mailOptions = {
    from: "Portfolio", 
    to: process.env.EMAIL_ADDRESS, 
    subject: `${capitalizedname} wants to ping you`, 
    text: message, 
    html: generateEmailTemplate(name, email, userMessage), 
    replyTo: email, 
  };


  
  try {
    console.log(process.env.EMAIL_ADDRESS);
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error while sending email:', error.message);
    return false;
  }
};

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message} = payload;
    // const token = process.env.TELEGRAM_BOT_TOKEN;
    // const chat_id = process.env.TELEGRAM_CHAT_ID;

    // // Validate environment variables
    // if (!token || !chat_id) {
    //   return NextResponse.json({
    //     success: false,
    //     message: 'Telegram token or chat ID is missing.',
    //   }, { status: 400 });
    // }

    // const message = `New message from ${name}\n\nEmail: ${email}\n\nMessage:\n\n${userMessage}\n\n`;

    // // Send Telegram message
    // const telegramSuccess = await sendTelegramMessage(token, chat_id, message);

    // Send email
    const emailSuccess = await sendEmail(payload, message);

    if (emailSuccess) {
      return NextResponse.json({
        success: true,
        message: 'Message and email sent successfully!',
      }, { status: 200 });
    }

    return NextResponse.json({
      success: false,
      message: 'Failed to send message or email.',
    }, { status: 500 });
  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred.',
    }, { status: 500 });
  }
};