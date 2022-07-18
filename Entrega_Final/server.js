const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const apiRoutes = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.use('/', apiRoutes);
app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

app.get('/*', (req, res) => {
    console.log('Página no encontrada');
    res.render('errors_files/404.ejs');
});