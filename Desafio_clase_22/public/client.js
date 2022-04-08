const socket = io.connect();
socket.on('messages', (data) => {
    console.log(`soy el cliente`);
    console.log(data);
    socket.emit('confirmation', 'soy el cliente, y el msj llegó bien')
});


function renderMsj(data){
    const html = data.map((elem, index) => {
        return(`
        <div>
            <span style="color:blue"><strong>${elem.author.name}</strong></span>
            <span style="color:brown">[${elem.time}]</span>
            <span>dice: </span>
            <span style="color:green"><i>${elem.text}</i></span>
        </div>
        `)
    }).join("");
    chatBox.innerHTML = html;
}
socket.on('messages', (data, time) => {
    renderMsj(data, time);
});

function addMsj (){
    const msj = {
        name: document.getElementById('username').value,
        age: document.getElementById('age').value,
        id: document.getElementById('email').value,
        alias: document.getElementById('alias').value,
        text: document.getElementById('text').value,
        time: new Date()
    };
    console.log(msj)
    socket.emit('new-message', msj);
    user.value = '';
    message.value = '';
    return false;
};