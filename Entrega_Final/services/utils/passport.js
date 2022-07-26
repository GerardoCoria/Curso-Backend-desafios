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
        passReqToCallback: true
    }, async (req, username, password, done) => {
        const userInDB = await UsersDaoMongo.getById({username: username})

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
    const user = await UsersDaoMongo.getById(id);
    done(null, UsersDaoMongo);
});

module.exports = initialize;