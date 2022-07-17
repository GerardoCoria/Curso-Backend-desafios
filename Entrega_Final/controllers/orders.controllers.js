const {
    getOrdersServices,
    newOrderServices,
    deleteOrderServices
} = require('../services/orders.services');

const getOrderControllers = (req, res) => {
    const order = getOrdersServices();
    res.json(order);
}

const newOrderControllers = (req, res) => {
    const order = newOrderServices(req.body);
    res.json(order);
}

const deleteOrderControllers = (req, res) => {
    const order = deleteOrderServices(req.params.id);
    res.json(order);
}

module.exports = {
    getOrderControllers,
    newOrderControllers,
    deleteOrderControllers
};