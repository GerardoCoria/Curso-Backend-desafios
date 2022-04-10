const express = require('express');
const fs = require('fs');
const app = express();
const http = require('http');
const port = process.env.PORT || 8080;
const socketIo = require('socket.io');
const httpServer = http.createServer(app);
const io = socketIo(httpServer);
const {schema, normalize, denormalize} = require('normalizr');
const util = require('util');

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

const messagesData = JSON.parse(fs.readFileSync('./db/memory.js', 'utf8'));
const messages={
    id: 100,
    text: messagesData
}

app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    products();
    res.render('index', {array, messagesData, percent});
});

httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const authorSchema = new schema.Entity('name')
const textSchema = new schema.Entity('text',{
    commenter: authorSchema
})
const messageSchema = new schema.Entity('message', {
    text: [textSchema],    
});
const normalizedMessages = normalize(messages, messageSchema);  
console.log(util.inspect(normalizedMessages, false, 12, true));
const originLength =JSON.stringify(messagesData).length;

const normalizedLenght = JSON.stringify(normalizedMessages).length;
const percent = (originLength - normalizedLenght) % 100;
console.log('Compresión: %', percent);

const denormalizeMessages = denormalize(normalizedMessages.result, messageSchema, normalizedMessages.entities);
console.log(util.inspect(denormalizeMessages, false, 12, true));

app.get('/*', (req, res) => {
    res.render('error');
})

io.on('connection', socket=>{
    console.log(`Nueva conexión, nuevo cliente N° ${socket.id} (soy el server)`);

    socket.emit('messages', [...messagesData]);
    socket.on('confirmation', data => {
        console.log(data);
    })
    socket.on('new-message', (data) => {
       
        messagesData.push(
            {
                id: messagesData.length+1,
                commenter: {
                    id: data.email,
                    name: data.name,
                    age: data.age,
                    alias: data.alias
                },
                text: data.text,
                time: data.time
            }
        )
        
        fs.writeFileSync('./db/memory.js', JSON.stringify(messagesData, null, 2));
        io.emit('messages', [...messages]);
    })
})