const { cartsDao } = require('../models/Factory/factory');
const cartsdao = new cartsDao();

const getCartServices = async () => {
    try{
        const cart = await cartsdao.getAll();
        return cart;
    }
    catch(err){
        throw new Error(err);
    }
};

const newItemServices = async (item) => {
    try{
        const newItem = await cartsdao.create(item);
        return newItem;
    }
    catch(err){
        throw new Error(err);
    }
};

const updateCartServices = async (cart) => {
    try{
        const updateCart = await cartsdao.updateOne(cart);
        return updateCart;
    }
    catch(err){
        throw new Error(err);
    }
}

const deleteCartServices = async (id) => {
    try{
        const deleteCart = await cartsdao.deleteOne(id);
        return deleteCart;
    }
    catch(err){
        throw new Error(err);
    }
}

module.exports = {
    getCartServices,
    newItemServices,
    updateCartServices,
    deleteCartServices
};
