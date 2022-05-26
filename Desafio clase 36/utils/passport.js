const localStrategy = require('passport-local').Strategy;
const passport = require('passport');
const User = require('../utils/user')
const express = require('express');
const router = express.Router();
const session = require('express-session');

router.use(session({
    secret: 'secret123abc',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie:{
        maxAge: 5000,
    },
}));

function initialize(){
    passport.use('login',new localStrategy({
            usernameField: 'userName',
            passwordField: 'password',
            passReqToCallback: true
        }, async (req, userName, password, done) => {
        const userInDB = await User.findOne({username: userName})

        if(userInDB){
            req.session.user = userInDB.username;
            return done(null, userInDB)
        }
            return done(null, false)
    }));
}
  
passport.serializeUser((username, done)=>{
    done(null, username.id);
});
passport.deserializeUser(async(id, done) =>{
    const user = await User.findById(id);
    done(null, user);
});

module.exports = initialize;