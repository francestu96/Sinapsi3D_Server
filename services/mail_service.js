const nodemailer = require('nodemailer');
const order_template = require('../assets/email_templates/order.html');

async function send_order({ to, subject, from = process.env.EMAIL_FROM }) {
    const transporter =   nodemailer.createTransport({
        "host": process.env.HOST,
        "port":process.env.EMAIL_PORT,
        "auth":{
            "user": process.env.EMAIL_USER,
            "pass" : process.env.EMAIL_PASS
        },
        "tls": {
            "rejectUnauthorized": false
            }
    })
    
    await transporter.sendMail({ from, to, subject, order_template })
}

exports.send_order=send_order;