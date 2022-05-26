const express = require('express');
const router = express.Router();
const twilio = require('twilio');
const ACCOUNT_SID = require('../../config').ACCOUNT_SID;
const ACCOUNT_TOKEN = require('../../config').ACCOUNT_TOKEN;
const WHATSAPP_TWILIO = require('../../config').WHATSAPP_TWILIO;
const WHATSAPP_CLIENT = require('../../config').WHATSAPP_CLIENT;
const twilioClient = new twilio(ACCOUNT_SID, ACCOUNT_TOKEN);
const cart = require('../../data/cart')
const newCart = cart[0].productsList;

let nameProduct = '';
for (const items of newCart) {
    nameProduct += `${items.name}, `;
}

async function sendMessage(){
    try{
        const options ={
            from: WHATSAPP_TWILIO,
            to: WHATSAPP_CLIENT,
            body:`
            Gracias por su compra! Disfrute de: ${nameProduct}. Esperamos que disfrute su compra.`
        }
        const messageResponse = await twilioClient.messages.create(options);
        console.log(messageResponse);
    }
    catch(e){
        console.log(e);
    }
}

router.get('/cart', (req, res) => {
    res.render('cart', {newCart});
})

router.get('/cart-message', (req, res) => {
    sendMessage();
    res.send('Mensaje enviado');
})

module.exports = router;