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

const updateCartServices = async (cart, product) => {
    try{
        console.log('CART EN SERVICES', cart);
        console.log('PRODUCT EN SERVICES', product);
        const updateCart = cart[0].products;
        // if(cart.find(item => item.name === product.name)){
        //     cart.find(item => item.name === product.name).quantity++;
        // }
        // else{
        //     cart.push(product);
        // }
        if (updateCart.find(item => item.name === product.name)) {
            console.log('el producto ya existe'); 
            updateCart.find(item => item.name === product.name).quantity++;  
        }
        else {
            updateCart.push({
                name: product.name,
                price: product.price,
                description: product.description,
                quantity: 1
            });
        }

        //updateCart.push(product);
        console.log('UPDATE CART EN SERVICES', updateCart);
        console.log('CART EN SERVICES', cart[0].products);
        const cartUpdated = await cartsdao.update(cart[0]._id, {products: updateCart});
        return cartUpdated;
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
