const express = require('express');
const router = express.Router();
const{
    getalluserControllers,
    newUserControllers,
    getUserControllers
} = require('../../controllers/users.controllers');

const session = require('express-session');
const initialize = require('../../services/utils/passport');
const passport = require('passport');
initialize(passport);
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


router.get('/todos', getalluserControllers);
router.get('/register', newUserControllers);
// router.post('/user', getUserControllers);
router.post('/user', passport.authenticate('login', {
    successRedirect: '/products',
    failureRedirect: '/users/error',
}));

router.get('/error', (req, res) => {
    res.render('users/error-login');
});

router.get('/:id', getUserControllers)

module.exports = router;