const {
    getOrdersServices,
    // newOrderServices,
    // deleteOrderServices
} = require('../services/orders.services');

const {getCartServices} = require('../services/cart.services');

const getOrderControllers = async (req, res) => {
    const cart = await getCartServices();
    const order = await getOrdersServices(cart);
    res.render('orders/orders', {cart});
}


// const newOrderControllers = async (req, res) => {
//     const order = await newOrderServices(req.body);
//     res.json(order);
// }

// const deleteOrderControllers = async (req, res) => {
//     const order = await deleteOrderServices(req.params.id);
//     res.json(order);
// } 

module.exports = {
    getOrderControllers,
    // newOrderControllers,
    // deleteOrderControllers
};