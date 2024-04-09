const nodemailer = require('nodemailer');
require("dotenv").config()
// Function to send an email
async function send_mail(email) {
    try {
        // Create a transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: "gmail",
            host:'smtp.gmail.com',
            port: 587,
            secure:false, // true for 465, false for other ports
            auth: {
                user: process.env.USER_EMAIL, // Your email
                pass: process.env.APP_PASSWORD // Your password
            }
        });

        // Setup email data
        let mailOptions = {
            from: `"Deepanshu Kumar" <${process.env.USER_EMAIL}>`, // sender address
            to: `${email}`, // list of receivers
            subject: 'Thankyou for Creating Account on Dribble', // Subject line
            html: "<p>Dear User, Thankyou for creating an account with Dribble. We're thrilled to have you onboard!\n If you have any questions or need assistance, feel free to reach out to our support team.\n Happy designing!" // html body
        };

        // Send mail with defined transport object
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        return info;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = send_mail;
