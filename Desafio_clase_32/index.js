const express = require('express');
const compression = require('compression');
const app = express();
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
const port = process.env.PORT || 3000;
const {
    logger,
    consoleLogger,
    infoLogger,
    warningLogger,
    errorLogger
} = require('./utils/index.js');

app.get('/',(req,res)=>{
    logger.info(`Método: [${req.method}], URL: localhost:${port}${req.url}`);
    res.send('<h3>Desafio Clase 32</h3>');
});

let array = [];
function test (){
    array = [];
    for (let i=0; i<100000; i++){
        array.push('Desafío Clase 32'); 
    }
}

app.get('/info', (req,res)=>{
    test();
    logger.info(`Método: [${req.method}], URL: localhost:${port}${req.url}`);
    console.log(array);
    res.json(array);
});

app.get('/infoZip', compression(), (req,res)=>{
    test();
    logger.info(`Método: [${req.method}], URL: localhost:${port}${req.url}`);
    res.json(array);
});

app.listen(port, () => {
    logger.trace('Server running on port ' + port);
    logger.debug('Listening on http://localhost:' + port);
    logger.error('Error');
    logger.fatal('Fatal error');
})

app.get('/*', (req,res)=>{
    logger.warn(`Método: [${req.method}], URL: localhost:${port}${req.url}`);
    res.send('La página no existe');
})