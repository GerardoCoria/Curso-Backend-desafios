const express = require('express');
const app = express();
const port = process.env.port || 8080;
const cookieParser = require('cookie-parser');

app.use(express.static('public'));
app.use(cookieParser(['secret123abc']));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
})

app.post('/login', (req, res) => {
    const {username, email, password} = req.body;
    res.cookie('user', email, {httpOnly: true, signed: true});
    res.cookie('username', username, {httpOnly: true, signed: true});
    res.render('login', {username})
})

app.get('/logout', (req, res) => {
    const username = req.signedCookies.username;
    res.render('logout', {username});
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});