const {
    getCartServices,
    newItemServices,
    updateCartServices,
    deleteCartServices
} = require('../services/cart.services');

const {getProductByIdServices} = require('../services/products.services');

const getCartControllers = async (req, res) => {
    const cart = await getCartServices();
    res.json(cart);
};

const newItemInCartControllers = async (req, res) => {
    //const cart = await newItemServices(req.body);
    //const idProduct = req.params.id;
    //console.log('ID PRODUCT', idProduct);
    const product = await getProductByIdServices(req.params.id);
    //const cart = await getCartServices();
    // const item = products.find(product => product._id == idProduct.id);
    // console.log(item);
    //console.log('PRODUCTO EN CART', product);
    const newItem = await updateCartServices(product);
    res.json(product);
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