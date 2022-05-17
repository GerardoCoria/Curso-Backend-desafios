const express = require('express');
const app = express();
const port = process.env.port || 8080;
const cookieParser = require('cookie-parser');
const session = require('express-session');
//const FileStore = require('session-file-store')(session);
const MongoStore = require('connect-mongo');
const config = require('./config');

app.use(express.static('public'));
app.use(cookieParser(['secret123abc']));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    name: 'mySession',
    secret: 'secret123abc',
    resave: false,
    saveUninitialized: false,
    // store: new FileStore({
    //     path: './sessions',
    //     //ttl: 5,
    //     retries: 0
    // }),
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://gcoria1989:${config.DB_PASSWORD}@cluster0.c5lzx.mongodb.net/sesiones?retryWrites=true&w=majority`,
    }),
    rolling: true,
    cookie:{
        maxAge: 5000,
    },
}))

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const sesiones=req.session.user;
    console.log(sesiones);
    res.render('index');
})

app.post('/login', async (req, res) => {
    const {username, email, password} = req.body;
    //res.cookie('user', email, {httpOnly: true, signed: true});
    res.cookie('username', username, {httpOnly: true, signed: true});
    req.session.user = username;
    req.session.mail = email;
    req.session.password = password;
    req.session.save(() => {
        console.log('sesion guardada');
        console.log(req.session);
    })
    res.render('login', {username})
})

app.get('/logout', (req, res) => {
    const username = req.signedCookies.username;
    res.clearCookie('mySession');
    req.session.destroy(err => {
        if (err) {
            console.log(err);
        }
        console.log('sesion destruida');
    })
    res.render('logout', {username});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});