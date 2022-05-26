const express = require('express');
const router = express.Router();
const session = require('express-session');
const initialize = require('../../utils/passport');
const passport = require('passport');
initialize(passport)
const User = require('../../utils/user')
const {productos} = require('../../data/data');

router.use(session({
    secret: 'secret123abc',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie:{
        maxAge: 5000,
    },
}));

router.use(passport.initialize());
router.use(passport.session());

router.get('/', (req, res) => {
    res.render('index', {productos});
});

router.get('/login', (req, res) => res.render('login'));

router.post('/login', passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: '/errorLogin',
}));

router.get('/errorLogin', (req, res) => res.render('errorLogin'));

router.get('/logout', (req, res) =>{
    req.session.destroy(err => {
        if(err){
            console.log(err);
        }
        else{
            console.log('Sesión cerrada');
        }
    });
    res.render('logout')
});

module.exports = router;