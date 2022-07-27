const localStrategy = require('passport-local').Strategy;
const passport = require('passport');
const UsersDaoMongo = require('../../models/Daos/users/UsersDaoMongo');
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
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true,
    },
    async (req, username, password, done) => {
        const userInDB = await UsersDaoMongo.findOne({username: username})
        if(userInDB){
            req.session.username = userInDB.username;
            return done(null, userInDB)
        }
            return done(null, false)
    }));
}
  
passport.serializeUser((username, done)=>{
    done(null, username._id);
});
passport.deserializeUser(async(id, done) =>{
    const user = await UsersDaoMongo.findOne(id);
    done(null, user);
});

module.exports = initialize;