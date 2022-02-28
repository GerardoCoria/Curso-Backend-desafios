// CLIENTE
const socket = io.connect();
socket.on('products', (data, saludo) => {
    console.log(`soy el cliente`);
    console.log(data);
    console.log(saludo);
    socket.emit('confirmation', 'soy el cliente, y el msj llegó bien')
});
socket.on('messages', (data, time) => {
    console.log(data)
})

//agregar productos
function renderProducts(data){
    const html = data.map((elem, index) => {
            return( `
                <div>
                    ${elem.nameP}: ${elem.price}
                </div>
                `)
        }).join('');
    document.getElementById('divProducts').innerHTML = html;
}
socket.on('products', data => {
    renderProducts(data);
});

function addProduct(){
    const product = {
        nameP: document.getElementById('productName').value,
        price: document.getElementById('productPrice').value
    };
    socket.emit('new-product', product);
    nameP.value = '';
    price.value = '';
    return false;
};

//agregar mensajes
const userName = document.getElementById('userName');
const textChat = document.getElementById('textChat');
const chatBox = document.getElementById('chatBox');
const btnSendChat = document.getElementById('btnSendChat');

function renderMsj(data){
    const html = data.map((elem, index) => {
        return(`
            <div>
                <span style="color:blue"><strong>${elem.user}</strong></span>
                <span style="color:brown">[${elem.time}]:</span>
                <span style="color:green"><i>${elem.message}</i></span>
            </div>
            `);
    }).join("");
    chatBox.innerHTML = html;
}

socket.on('messages', (data, time) => {
    renderMsj(data, time);
});


function addMsj (){
    const msj = {
        user: document.getElementById('userName').value,
        message: document.getElementById('textChat').value,
        time: new Date()
    };
    socket.emit('new-message', msj);
    user.value = '';
    message.value = '';
    return false;
};