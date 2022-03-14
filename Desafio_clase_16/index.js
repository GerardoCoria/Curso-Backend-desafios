//SERVIDOR WEB
const express = require('express');
const app = express();
const http = require('http');
const socketIo = require('socket.io');
const port = process.env.PORT || 8080;
const httpServer = http.createServer(app);
const io = socketIo(httpServer);
const moment = require('moment');
const {creatingTable, readTable, updateTable, deleteTable} = require('./scripts/products_table.js');


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index', {products, msj});
})


httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const products= []
const msj = []

creatingTable();

io.on('connection', socket=>{
    console.log(`Nueva conexión, nuevo cliente N° ${socket.id} (soy el server)`);
    readTable();

    socket.emit('products', [...products]);
    socket.emit('messages', [...msj]);

    socket.on('new-product', product => {
        products.push({
            nameP: product.nameP,
            price: product.price
        });
        
        updateTable({
            nameP: product.nameP,
            price: product.price
        })

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