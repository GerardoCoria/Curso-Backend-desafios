const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const {logger} = require('./utils/logger.js');
const apiRoutes = require('./routes/index.js');
const mongoose = require('mongoose');
const session = require('express-session');
const config = require('./config').DB_PASSWORD;
const passport = require('passport');

app.use('/', apiRoutes);
app.use(express.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(PORT, async () => {
    mongoose.connect(`mongodb+srv://gcoria1989:${config}@cluster0.c5lzx.mongodb.net/desafio_clase_26?retryWrites=true&w=majority`)
        .then(() => {
    logger.info('Conectado a MongoDB');
    logger.info(`Server running on port ${PORT}`);
    logger.trace('Listening on http://localhost:' + PORT);
        })
})

app.get('/*', (req, res) => {
    logger.error('Page not found');
    res.render('404')
});