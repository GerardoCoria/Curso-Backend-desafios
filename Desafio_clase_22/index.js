const express = require('express');
const fs = require('fs');
const app = express();
const http = require('http');
const port = process.env.PORT || 8080;
const socketIo = require('socket.io');
const httpServer = http.createServer(app);
const io = socketIo(httpServer);
const {schema, normalize} = require('normalizr');
const messages = require('./db/memory');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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

// const messages = [{
//     author:{
//         id: 'gg@gg',
//         name: 'Otto',
//         age: 6,
//         alias: 'Peludito'
//     },
//     text: 'holaa, tengo hambre humano'
// }];


app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    products();
    res.render('index', {array, messages});
});

httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/*', (req, res) => {
    res.render('error');
})

io.on('connection', socket=>{
    console.log(`Nueva conexión, nuevo cliente N° ${socket.id} (soy el server)`);
    console.log(messages)
    socket.emit('messages', [...messages]);
    socket.on('confirmation', data => {
        console.log(data);
    })
    socket.on('new-message', (data) => {
        messages.push(
            {
                author:{
                    id: data.email,
                    name: data.name,
                    age: data.age,
                    alias: data.alias
                },
                text: data.text,
                time: data.time
            })
        fs.writeFileSync('./db/memory.json', JSON.stringify(messages, null, 2));
        io.emit('messages', [...messages]);
    })
})