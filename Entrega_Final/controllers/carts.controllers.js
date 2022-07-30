const {
    getCartServices,
    newItemServices,
    updateCartServices,
    deleteCartServices
} = require('../services/cart.services');

const {getProductByIdServices} = require('../services/products.services');

const getCartControllers = async (req, res) => {
    const cart = await getCartServices();
    res.render('carts/cart', {cart});
};

const newItemInCartControllers = async (req, res) => {
    const product = await getProductByIdServices(req.params.id);
    const cart = await getCartServices();
    const newItem = await updateCartServices(cart, product);
    res.render('carts/cart', {cart});
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
    newItemInCartControllers,
    updateCartControllers,
    deleteCartControllers
};