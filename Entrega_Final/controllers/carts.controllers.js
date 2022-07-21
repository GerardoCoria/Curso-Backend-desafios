const {
    getCartServices,
    newItemServices,
    updateCartServices,
    deleteCartServices
} = require('../services/cart.services');

const {getAllProductsServices} = require('../services/products.services');

const getCartControllers = async (req, res) => {
    const cart = await getCartServices();
    res.json(cart);
};

const newItemInCartControllers = async (req, res) => {
    //const cart = await newItemServices(req.body);
    const idProduct = req.params;
    const products = await getAllProductsServices();
    console.log('ideeee',products[0]._id);
    const item = products.find(product => product._id == idProduct.id);
    console.log(item);
    res.json(item);
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