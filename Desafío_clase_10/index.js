const {urlencoded} = require('express');
const express = require('express');
const { engine } = require("express-handlebars");
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main.hbs',
    layoutsDir: path.resolve(__dirname, 'views/layouts'),
    partialsDir: path.resolve(__dirname, 'views/layouts/partials/')
}));

app.set('views', './views');
//Cambar el motor de plantillas: hbs, pug, ejs
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {products});
});

app.get('/products', (req, res) => {
    res.render('history', {products});
})

const products = []
app.post('/products', (req, res) => {
    products.push(req.body)
    res.redirect('/')
}); 

const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
server.on('error', (err) => {
    console.log(err.message);
});