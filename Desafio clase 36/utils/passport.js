const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const localStrategy = require('passport-local').Strategy;
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../utils/user')


const express = require('express');
const router = express.Router();
const session = require('express-session');


const isValidPassword = (username, password) => {
    return bcrypt.compareSync(password, username.password);
};
router.use(session({
    secret: 'secret123abc',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie:{
        maxAge: 5000,
    },
}));


// const userSchema = new Schema({
//     username: String,
//     password: String,
//     email: String,
// });
// const UserLogin = mongoose.model('UserLogin', userSchema);

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
    //    if(!userInDB){
    //        return done(null, false);
    //    }
    //    if(!isValidPassword(userInDB, password)){
    //        return done(null, false);
    //    }
    //     return done(null, userInDB);
    // }
// ));

// }
  
passport.serializeUser((username, done)=>{
    done(null, username.id);
});
passport.deserializeUser(async(id, done) =>{
    const user = await User.findById(id);
    done(null, user);
});

module.exports = initialize;