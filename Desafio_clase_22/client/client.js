const socket = io.connect();
socket.on('products', (data, saludo) => {
    console.log(`soy el cliente`);
    console.log(data);
});
socket.on('messages', (data, time) => {
    console.log(data)
})