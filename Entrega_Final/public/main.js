const socket = io.connect();
socket.on('msj', () => {
    console.log(`Cliente dice: conectado con el servidor`);
    socket.emit('confirmation', 'Cliente conectado exitosamente');
});
socket.on('messages', (data) => {
    console.log(data);
});

const chatBox = document.getElementById('chatBox');
const username = document.getElementById('username');
const text = document.getElementById('text');

function renderMsj(data){
    const html = data.map((elem, index) => {
        return(`
            <div>
                <span style="color:blue"><strong>${elem.username}</strong></span>
                <span style="color:brown">[${elem.time}]:</span>
                <span style="color:green"><i>${elem.text}</i></span>
            </div>
            `);
    }).join("");
    chatBox.innerHTML = html;
}

socket.on('messages', (data) => {
    renderMsj(data);
});

function addMsj (){
    const msj = {
        username: document.getElementById('username').value,
        text: document.getElementById('text').value,
        time: new Date().toDateString()
    }; 
    socket.emit('new-message', msj);
    username.value = '';
    text.value = '';
    return false;
};