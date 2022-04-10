const express = require('express');
const app = express();
const port = process.env.port || 8080;
const cookieParser = require('cookie-parser');
const sesion = require('express-session');
const FileStore = require('session-file-store')(sesion);

app.use(express.static('public'));
app.use(cookieParser(['secret123abc']));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(sesion({
    secret: 'secret123abc',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
        path: './sessions',
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
    req.session.destroy(err => {
        if (err) {
            console.log(err);
        }
        else{
            console.log('sesion destruida');
        }
})
})

app.post('/', (req, res) => {
    const {username, email, password} = req.body;
    res.cookie('user', email, {httpOnly: true, signed: true});
    res.cookie('username', username, {httpOnly: true, signed: true});
    res.render('login', {username})

    req.session.save(() => {
        console.log('sesion guardada');
    })
})



app.get('/logout', (req, res) => {
    const username = req.signedCookies.username;
    res.render('logout', {username});
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});