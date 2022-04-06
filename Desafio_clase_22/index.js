const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const apiRoutes = require('./routes/index.js');
const http = require('http');
const socketIo = require('socket.io');
const httpServer = http.createServer(app);
const io = socketIo(httpServer);
const {schema, normalize} = require('normalizr');
//const generateProducts = require('./controllers/products.controllers');

app.use('/', apiRoutes);

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.set('views', './views');
app.set('view engine', 'ejs');

const {commerce} = require('faker');

let array = [];

const products = () => {
    array = [];
    for (let i = 1; i < 6; i++) {
        array.push({
            id: i,
            name: commerce.product(),
            price: commerce.price()
        })
    }
}

app.get('/', (req, res) => {
    products();
    res.render('index', {array});
    console.log(array)
});

const messages = [];

io.on('connection', socket=>{
    console.log(`Nueva conexión, nuevo cliente N° ${socket.id} (soy el server)`);
}
)


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
