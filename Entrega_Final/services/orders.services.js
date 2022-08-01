const { ordersDao } = require('../models/Factory/factory');
const ordersdao = new ordersDao();

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'elza.shields@ethereal.email',
        pass: 'Dzem97aRu9F8B5RZJs'
    },
    tls: {
          rejectUnauthorized: false
      }
});
function sendEmail(data){
    const cart = data.map (item => {
        return `${item.name} (${item.quantity} unidades)`;
    }
    ).join('');

    const mailOptions = {
        from: 'Node JS Server',
        to: 'elza.shields@ethereal.email',
        secure: false,
        subject: 'Nueva orden de compra',
        text: `La  orden de compra es: ${cart}`
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log('tengo un error:',error);
        } else {
            console.log('Email enviado correctamente');
        }
    });
}

const getOrdersServices = async (cart) => {
    try{
        console.log('el carrito a ser pusheado:', cart[0].products);
        const orders = await ordersdao.getAll();
        console.log('orders, con S, es', orders);
        const order = orders[0].products;
        console.log('la orden vacia es: ', order);
        const id = orders[0]._id;
        console.log('el id de la orden: ', id);
        const newOrder = await ordersdao.update({_id: id}, {products: cart[0].products});
        console.log('la orden con el carrito pusheado es: ', order);
        sendEmail(order);
        return newOrder;
    }
    catch(err){
        throw new Error(err);
    }
}

// const newOrderServices = async () => {
//     try{
//         const order = await ordersdao.create(req.body);
//         return order;
//     }
//     catch(err){
//         throw new Error(err);
//     } 
// }

// const deleteOrderServices = async (id) => {
//     try{
//         const order = await ordersdao.deleteOne(id);
//         return order;
//     }
//     catch(err){
//         throw new Error(err);
//     }
// }

module.exports = {
    getOrdersServices,
    // newOrderServices,
    // deleteOrderServices
};