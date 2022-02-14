// const { urlencoded } = require('body-parser');
const express = require('express');


const app = express();

const routerProducts = require('./products.routes');

const PORT = process.env.PORT || 8080;

app.use('/api', routerProducts);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.use(express.static(__dirname + ''));

const serverConnected = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
serverConnected.on('error', (err) => {
    console.log(err);
});


module.exports = app;