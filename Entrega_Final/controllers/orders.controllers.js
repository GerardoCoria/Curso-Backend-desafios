const {
    getOrdersServices,
} = require('../services/orders.services');

const {getCartServices} = require('../services/cart.services');

const getOrderControllers = async (req, res) => {
    const cart = await getCartServices();
    const order = await getOrdersServices(cart);
    res.render('orders/orders', {cart});
}

module.exports = {
    getOrderControllers,
};