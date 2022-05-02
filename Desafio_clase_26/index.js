// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;
// const dbConfig = require('./db/config.env');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');
// const cookieParser = require('cookie-parser');
// const passportMiddlewares = require('./middlewares/passport');
// const passport = require('passport');

// app.use(cookieParser(['secret123abc']));
// app.use(session({
//     name: 'mySession',
//     secret: 'mysecret123abc',
//     resave: false,
//     saveUninitialized: false,
//     store: MongoStore.create({
//         mongoUrl: `mongodb+srv://gcoria1989:${dbConfig.DB_PASSWORD}@cluster0.c5lzx.mongodb.net/desafio_clase_26?retryWrites=true&w=majority`,
//     })
// }))

// app.set('views', './views');
// app.set('view engine', 'ejs');
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(passport.initialize());
// app.use(passport.session());

// app.get('/', (req, res) => {
//     const user = req.session.user;
//     if (user == undefined) return res.redirect('/login');
//     const username = user.split('@')[0];
//     res.render('index.ejs', { username });
// })

// app.get('/register', (req, res) => {
//     res.render('register.ejs');
// })

// app.post('/register', (req, res) => {
//     passport.authenticate('register', {failureRedirect: '/error-register'})
//     const {username, password} = req.body;
//     req.sesion.user = username;
//     res.redirect('/login');
// });

// app.get('/error-register', (req, res) => {
//     res.render('error-register.ejs');
// })

// app.get('/login', (req, res) => {
//     console.log('USUARIO EN LOGIN!!!', req.session.user)
//     res.render('login');
// })

// app.post('/login', (req, res) => {
//     const {username, password} = req.body;
  
//     const user = req.session.user;
//     console.log('usuario logueado', username);
//     if (user === username) return res.redirect('/');
//     res.redirect('/error-login');
// })

// app.get('/error-login', (req, res) => {
//     res.render('error-login');
// })

// app.get('/logout', (req, res) => {
//     // const user = req.session.user;
//     // const username = user.split('@')[0];
//     // req.session.destroy(() => {
//     //     console.log('sesion destruida');
//     // });
//     // res.clearCookie('username');
//     // res.render('logout', {username});

//     req.logOut();
// })

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const dbConfig = require('./db/config.env');
const apisRoutes = require('./routers/app.routers');
const port = process.env.PORT || 3000;
const passport = require('./middlewares/passport');
const app = express();
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    name: 'mySession',
    secret: 'mysecret123abc',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://gcoria1989:${dbConfig.DB_PASSWORD}@cluster0.c5lzx.mongodb.net/desafio_clase_26?retryWrites=true&w=majority`,
    })
}))
app.use(passport.initialize());
app.use(passport.session());
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(apisRoutes);
app.listen(port, async () => {
  mongoose.connect(dbConfig.mongodb.connectTo('desafio_clase_26'))
  .then(() => {
    console.log('Conectado a MongoDB');
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
});
