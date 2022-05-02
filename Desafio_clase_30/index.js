const express = require('express');
const cluster = require('cluster');
const http = require('http');
const app = express();
const os = require('os');
const minimist = require('minimist');
const { fork } = require('child_process');
let port;
let server;

const args = minimist(process.argv.slice(2),{
    alias:{
        p: 'port',
        s: 'server',
    },
});

if(args.p == undefined){
    port = 8080;
}
else{
    port = args.p;
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    if (args.s == undefined){
        server = 'fork'
    }
    else{
        server = args.s
    }
    console.log(server)
    res.send(`<h3>El servidor es: ${server}</h3>`);
})

app.get('/info', (req, res) => {
    const numbers = os.cpus().length;
    res.send(`<h3>Número de procesadores del servidor: ${numbers}</h3>`);
})

app.get('/randoms', (req, res) => {
    const html = `<h3>Puerto utilizado: ${port}</h3>
        <h3>Número de procesadores del servidor: ${os.cpus().length}</h3>
        <h3>Hora de la petición: ${new Date().toLocaleString()}</h3>;
        <h3>Número de proceso: ${process.pid}</h3>`;
    res.send(html)
})

app.listen(args.p, () => {
    console.log('servidor iniciado en el puerto', port);
});