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
            console.log(error);
        } else {
            console.log('Email enviado correctamente');
        }
    });
}

const getOrdersServices = async (cart) => {
    try{
        const orders = await ordersdao.getAll();
        const order = orders[0].products;
        const id = orders[0]._id;
        const newOrder = await ordersdao.update({_id: id}, {products: cart[0].products});
        sendEmail(order);
        return newOrder;
    }
    catch(err){
        throw new Error(err);
    }
}

module.exports = {
    getOrdersServices,
};