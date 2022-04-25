const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dbConfig = require('./db/config.env');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

app.use(cookieParser(['secret123abc']));
app.use(session({
    name: 'mySession',
    secret: 'mysecret123abc',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://gcoria1989:${dbConfig.DB_PASSWORD}@cluster0.c5lzx.mongodb.net/desafio_clase_26?retryWrites=true&w=majority`,
    })
}))

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const user = req.session.user;
    if (user == undefined) return res.redirect('/login');
    const username = user.split('@')[0];
    res.render('index.ejs', { username });
})

app.get('/register', (req, res) => {
    console.log('USUARIO EN REGISTRO:' + req.session.user);
    res.render('register.ejs');
})

app.post('/register', (req, res) => {
    const {username, password} = req.body;
    const user = req.session.user;
    if(user == username) return res.redirect('/error-register');
    req.session.save(() => {
        req.session.user = username;
        console.log('usuario guardado');
    });
    console.log('USUARIO REGISTRADO:' + req.session.user);
    res.redirect('/login');
})

app.get('/error-register', (req, res) => {
    res.render('error-register.ejs');
})

app.get('/login', (req, res) => {
    console.log('USUARIO EN LOGIN!!!', req.session.user)
    res.render('login');
})

function isValidPassword(user, password) {
    return bcrypt.compareSync(password, user.password);
};  

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    passport.use('login', new LocalStrategy(async(username, password, done) => {
      user.findOne({username}, (err, user) => {
          if(err){
              return done(err);
          }
            if(!user){
                console.log('no existe usuario');
                return done(null, false);
            }
            if(!isValidPassword(user, password)){
                console.log('contraseña incorrecta');
                return done(null, false);
            }
            console.log('todo ok');
            return done(null, user);
        })
    }))
    const user = req.session.user;
    console.log('usuario login', username);
    if (user === username) return res.redirect('/');
    res.redirect('/error-login');
})

app.get('/error-login', (req, res) => {
    res.render('error-login');
})

app.get('/logout', (req, res) => {
    const user = req.session.user;
    const username = user.split('@')[0];
    req.session.destroy(() => {
        console.log('sesion destruida');
    });
    res.clearCookie('username');
    res.render('logout', {username});
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});