const express = require('express');
const app = express();
const port = process.env.port || 3000;
app.get('/', (req, res) => {
    res.send('<h1>Desafío Clase 34</h1>');
})
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})