const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const apiRoutes = require('./routes/index');
const http = require('http');
const socketIo = require('socket.io');
const httpServer = http.createServer(app);
const io = socketIo(httpServer);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRoutes);
app.set('views', './views');
app.set('view engine', 'ejs');

const messages = require('./services/db/messages');

httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
io.on('connection', socket=>{
    console.log(`Servidor dice: Servidor iniciando`);
    socket.emit('messages', [...messages]);
    socket.on('confirmation', data =>{
        console.log(data);
    });
    socket.on('new-message', (data)=>{
        messages.push({
            username: data.username, 
            text: data.text,
            time: data.time
        });
        io.emit('messages', [...messages]);
    });
});

app.get('/*', (req, res) => {
    console.log('Página no encontrada');
    res.render('errors_files/404.ejs');
});