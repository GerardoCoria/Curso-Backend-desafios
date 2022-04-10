const express = require('express');
const app = express();
const port = process.env.port || 8080;
const cookieParser = require('cookie-parser');
const session = require('express-session');
//const FileStore = require('session-file-store')(session);
const MongoStore = require('connect-mongo');

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
        mongoUrl: 'mongodb+srv://gcoria1989:gimeno666@cluster0.c5lzx.mongodb.net/sesiones?retryWrites=true&w=majority',
    }),
    rolling: true,
    cookie:{
        maxAge: 5000
    }
}))

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');

})

app.post('/login', async (req, res) => {
    const {username, email, password} = req.body;
    //res.cookie('user', email, {httpOnly: true, signed: true});
    res.cookie('username', username, {httpOnly: true, signed: true});
    res.render('login', {username})
    req.session.user = username;
    req.session.save(() => {
        console.log('sesion guardada');
        console.log(req.session);
    })
})

app.get('/logout', (req, res) => {
    const username = req.signedCookies.username;
    res.clearCookie('mySession');
    res.render('logout', {username});
    req.session.destroy(err => {
        if (err) {
            console.log(err);
        }
        console.log('sesion destruida');
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});