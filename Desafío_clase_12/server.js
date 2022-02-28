//SERVIDOR WEB
const express = require('express');
const app = express();
const http = require('http');
const socketIo = require('socket.io');
const port = process.env.PORT || 8080;
const httpServer = http.createServer(app);
const io = socketIo(httpServer);
const moment = require('moment');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const products = []

const msj = []

const saludo = `Hola, soy el servidor en ${port}`;

app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index', {products, msj});
})

httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

io.on('connection', socket=>{
    console.log(`Nueva conexión, nuevo cliente N° ${socket.id} (soy el server)`);
    socket.emit('products', [...products], saludo);
    socket.emit('messages', [...msj]);
    socket.on('confirmation', data => {
        console.log(data);
    })

    socket.on('new-product', product => {
        products.push(
            {
                nameP: product.nameP,
                price: product.price
            }
        );
        io.emit('products', [...products]);
    })

    socket.on('new-message', (data) => {
        msj.push(
            {
                user: data.user,
                message: data.message,
                time: moment().format('DD/MM/YYYY HH:mm:ss')
            }
        );
        io.emit('messages', [...msj]);
    })
}
);