const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dbConfig = require('./db/config');
const session = require('express-session');
const MongoStore = require('connect-mongo');


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
    res.render('index.ejs');
})

app.get('/register', (req, res) => {
    res.render('register.ejs');
})

app.get('/login', (req, res) => {
    res.render('login.ejs');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});