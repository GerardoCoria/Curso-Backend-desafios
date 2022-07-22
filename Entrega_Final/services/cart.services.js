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

const updateCartServices = async (item) => {
    try{
        const cart = await getCartServices();
        // const id = cart[0].id;
        // console.log('ID!!!', id);
        console.log('CART', cart);
        console.log('ITEM', item);
        const updateCart = await cartsdao.update(cart, item);
        console.log('UPDATE_CART', updateCart);
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
