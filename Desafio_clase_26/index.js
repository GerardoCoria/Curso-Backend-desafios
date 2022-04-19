const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dbConfig = require('./db/config.env');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');


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
    const username = user.split('@')[0];
    res.render('index.ejs', { username });
})

app.get('/register', (req, res) => {
    res.render('register.ejs');
})

app.post('/register', (req, res) => {
    const {username, password} = req.query;
    req.session.user = username;
    req.session.save(() => {
        console.log('usuario guardado');
    });
    //enctriptar constraseña
    res.send('usuario guardado');
    console.log('username!!', username);
    console.log('usuario!!',req.session);
})


app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    const {username, password} =req.body;
    //aca va la autenticacion con passport local
    req.session.user = username;
    res.cookie('username', username, {httpOnly: true, signed: true});

    res.redirect('/');
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