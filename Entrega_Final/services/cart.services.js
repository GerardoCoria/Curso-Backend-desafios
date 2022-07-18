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

const newCartServices = async (cart) => {
    try{
        const newCart = await cartsDao.create(cart);
        return newCart;
    }
    catch(err){
        throw new Error(err);
    }
};

const updateCartServices = async (cart) => {
    try{
        const updateCart = await cartsDao.updateOne(cart);
        return updateCart;
    }
    catch(err){
        throw new Error(err);
    }
}

const deleteCartServices = async (id) => {
    try{
        const deleteCart = await cartsDao.deleteOne(id);
        return deleteCart;
    }
    catch(err){
        throw new Error(err);
    }
}

module.exports = {
    getCartServices,
    newCartServices,
    updateCartServices,
    deleteCartServices
};
