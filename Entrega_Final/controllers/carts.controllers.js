const {
    getCartServices,
    newCartServices,
    updateCartServices,
    deleteCartServices
} = require('../services/cart.services');

const getCartControllers = async (req, res) => {
    const cart = await getCartServices();
    res.json(cart);
};

const newCartControllers = async (req, res) => {
    const cart = await newCartServices(req.body);
    res.json(cart);
};

const updateCartControllers = async (req, res) => {
    const cart = await updateCartServices(req.body);
    res.json(cart);
};

const deleteCartControllers = async (req, res) => {
    const cart = await deleteCartServices(req.params.id);
    res.json(cart);
};

module.exports = {
    getCartControllers,
    newCartControllers,
    updateCartControllers,
    deleteCartControllers
};