// const express = require ('express');
// const app = express();
// const {Server: httpServer} = require('http');
// const {Server: IoServer} = require('socket.io');
// const port = process.env.PORT || 8080;
// const serverHttp = new httpServer(app);
// const io = new IoServer(serverHttp);

// const server =  app.listen(port, () => {
//     console.log(`Server running on port ${port}`)
// })


// app.get('/', (req, res) => {
//     res.send('Hello world');
// })


// app.use(express.static('Desafío_clase_12'));


// io.on('connection', (socket) => {
//     console.log('Nueva conexión');
//     socket.emit('message', 'Hola mundo');
// });