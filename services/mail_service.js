const nodemailer = require('nodemailer');
const welcome_template = require('../assets/email_templates/welcome');
const order_template = require('../assets/email_templates/order');
const forgot_password_template = require('../assets/email_templates/forgot_password');

const attachments = [
    {
        filename : 'sinapsi3d.png',
        path: './assets/icons/sinapsi3d.png',
        cid : 'sinapsi3d'
    },
    {
        filename : 'place.png',
        path: './assets/icons/place.png',
        cid : 'place'
    },
    {
        filename : 'phone.png',
        path: './assets/icons/phone.png',
        cid : 'phone'
    },
    {
        filename : 'email.png',
        path: './assets/icons/email.png',
        cid : 'email'
    },
];

const send_welcome = async (name, to, from = process.env.EMAIL_FROM ) => {
    const transporter = nodemailer.createTransport({
        "host": process.env.EMAIL_HOST,
        "port": process.env.EMAIL_PORT,
        "secureConnection": false,
        "tls": {
            ciphers:'SSLv3'
        },
        "auth":{
            "user": process.env.EMAIL_USER,
            "pass" : process.env.EMAIL_PASS
        }
    });
    await transporter.sendMail({ from, to, subject: "Benvenuto!", html: welcome_template(name), attachments });
}

const send_order = async (to, from = process.env.EMAIL_FROM ) => {    
    const transporter = nodemailer.createTransport({
        "host": process.env.EMAIL_HOST,
        "port": process.env.EMAIL_PORT,
        "secureConnection": false,
        "tls": {
            ciphers:'SSLv3'
        },
        "auth":{
            "user": process.env.EMAIL_USER,
            "pass" : process.env.EMAIL_PASS
        }
    });
    await transporter.sendMail({ from, to, subject: "Nuovo ordine ricevuto", html: order_template, attachments });
}

const send_forgot_password = async (password, to, from = process.env.EMAIL_FROM ) => {
    const transporter = nodemailer.createTransport({
        "host": process.env.EMAIL_HOST,
        "port": process.env.EMAIL_PORT,
        "secureConnection": false,
        "tls": {
            ciphers:'SSLv3'
        },
        "auth":{
            "user": process.env.EMAIL_USER,
            "pass" : process.env.EMAIL_PASS
        }
    });
    await transporter.sendMail({ from, to, subject: "Nuove credenziali", html: forgot_password_template(password), attachments });
}

exports.send_welcome=send_welcome;
exports.send_order=send_order;
exports.send_forgot_password=send_forgot_password;