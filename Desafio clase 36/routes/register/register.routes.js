const express = require('express');
const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const router = express.Router();
// const localStrategy = require('passport-local').Strategy;
// const passport = require('passport');
// const session = require('express-session');
// const bcrypt = require('bcrypt');
const User = require('../../utils/user')

const nodemailer = require('nodemailer');
const MAIL = 'alwkqkni7ml2puyt@ethereal.email';
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: MAIL,
        pass: 'SWAz4cHeJxsKYRXmCf'
    },
    tls: {
        rejectUnauthorized: false
    }
});

function sendingMail(newUser){
    const mailOptions = {
        from:'Node JS Server',
        to: MAIL,
        secure: false,
        subject: 'New user registered',
        html: `<h1>New user registered</h1>
                <p>Username: ${newUser.username}</p>
                <p>Email: ${newUser.email}</p>
                <p>Password: ${newUser.password}</p>` 
    };
    transporter.sendMail(mailOptions, (err, info) => {
    if(err){
        console.log(err);
        res.send('error');
    }
    else{
        console.log('Email sent: ');
        res.send('Email sent');
    }
});
}

// const userSchema = new Schema({
//     username: String,
//     password: String,
//     email: String,
// });
// const UserR = mongoose.model('UserR', userSchema);
router.get('/register', (req, res) => res.render('register'));

router.post('/register', (req, res) => {
    const {userName, password, email} = req.body;
    const newUser ={
        username: userName,
        password: password,
        email: email,
    }
    const user = new User(newUser);
    user.save()
        .then(() => console.log('Usuario creado'))
        .then(res.send('Usuario creado'))
        .then(sendingMail(newUser))
        .catch(err => res.send(err))
});

module.exports = router;