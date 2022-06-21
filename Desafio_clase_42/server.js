const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const {logger} =require('./api/utils/logger');
const apiRoutes = require('./routes/index');
const session = require('express-session');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: false
}));

app.use('/', apiRoutes);

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/*', (req, res) => {
    logger.error('Page not found');
    logger.trace('Error en la ruta http://localhost:'+PORT+ req.url);
    res.render('404')
});

app.listen(PORT,  () => {
    logger.info(`Server running on port ${PORT}`);
    logger.trace('Listening on http://localhost:' + PORT);
})

module.exports = app;