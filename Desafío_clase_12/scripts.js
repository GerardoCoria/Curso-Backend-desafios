const socket = io('http://localhost:8080');

socket.on('connection', () => {
    console.log('Conectado');
});