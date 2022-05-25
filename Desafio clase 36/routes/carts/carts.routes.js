const express = require('express');
const router = express.Router();
const twilio = require('twilio');
const ACCOUNT_SID = 'AC416671f4800ffe34143d277644bed7e3';
const ACCOUNT_TOKEN = 'ecc802beb88869221b82c338b12301eb';
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
            from:'whatsapp:+14155238886',
            to:'whatsapp:+5491141913236',
            body:`Gracias por su compra! Disfrute de: ${nameProduct}`
        }
        const messageResponse = await twilioClient.messages.create(options);
        console.log(messageResponse);
    }
    catch(e){
        console.log(e);
    }
}

router.get('/cart-message', (req, res) => {
    sendMessage();
    res.send('Mensaje enviado');
})


router.get('/cart', (req, res) => {
    res.render('cart', {newCart});
})

module.exports = router;