// CLIENTE
const socket = io.connect();
socket.on('message', () => {
    console.log(`Cliente dice: conectado con el servidor`);
    socket.emit('confirmation', 'Cliente conectado exitosamente');
});
socket.on('message', (data, time) => {
    console.log(data)
});




//agregar mensajes
const username = document.getElementById('username');
const text = document.getElementById('text');
const chatBox = document.getElementById('chatBox');
const btnSendChat = document.getElementById('btnSendChat');

// function renderMsj(data){
//     const html = data.map((elem, index) => {
//         return(`
//             <div>
//                 <span style="color:blue"><strong>${elem.user}</strong></span>
//                 <span style="color:brown">[${elem.time}]:</span>
//                 <span style="color:green"><i>${elem.message}</i></span>
//             </div>
//             `);
//     }).join("");
//     chatBox.innerHTML = html;
//}

// socket.on('messages', (data, time) => {
//     renderMsj(data, time);
// });


function addMsj (){
    const msj = {
        username: document.getElementById('username').value,
        text: document.getElementById('text').value,
        time: new Date()
    };
    socket.emit('new-message', msj);
    username.value = '';
    text.value = '';
    return false;
};