const express = require('express');
const {cart} = require('../data/data.js');
const router = express.Router();

//RUTA POST PARA CREAR UN CARRITO
router.post('/carrito', (req, res) => {
    const {productsList}= req.body;
    if(!productsList){
        res.status(400).send('Faltan datos');
    }
    const newCart = {
        id: cart.length + 1,
        productsList
    };
    cart.push(newCart);
    res.status(200).send(`Carrito con id ${newCart.id} creado correctamente!`);
});

//RUTA GET PARA OBTENER TODOS LOS PRODUCTOS DEL CARRITO
router.get('/carrito/:id', (req, res) => {
    const {id} = req.params;
    const cartId = cart.find(cart => cart.id === +id);
    if(!cartId){
        res.status(404).send('Carrito no encontrado');
    }
    res.send(cartId);
})

//RUTA GET PARA OBTENER UN PRODUCTO DE UN CARRITO
router.get('/carrito/:idCart/producto/:idProduct', (req, res) => {
    const {idCart, idProduct} = req.params;
    const idCartIndex = cart.findIndex((cart) => cart.id === +idCart);
    const idProductIndex = cart[idCartIndex].productsList.findIndex((product) => product.id === +idProduct);
    if(!cart[idCartIndex].productsList[idProductIndex]){
        res.status(404).send('Producto no encontrado');
    }
    res.send(cart[idCartIndex].productsList[idProductIndex]);
})

//RUTA POST PARA AGREGAR UN PRODUCTO A UN CARRITO
router.post('/carrito/:idCart', (req, res) => {
    const{idCart} = req.params;
    const {productsList}=req.body;
    const idCartIndex = cart.findIndex((cart) => cart.id === +idCart);
    if(!productsList){
        res.status(400).send('Faltan datos');
    }
    const newProduct = {
        id: cart[idCartIndex].productsList.length + 1,
        ...productsList
    };
    cart[idCartIndex].productsList.push(newProduct);
    res.status(200).send(`Producto con id ${newProduct.id} agregado correctamente al carrito ${idCart}!`);
})

//RUTA DELETE PARA ELIMINAR UN CARRITO ENTERO
router.delete('/carrito/:id', (req, res) => {
    const {id} = req.params;
    const carrritoIndex = cart.findIndex((cart) => cart.id === +id);
    cart.splice(carrritoIndex, 1);
    return res.status(200).send('Carrito eliminado!');
});

//RUTA DELETE PARA ELIMINAR UN PRODUCTO DE UN CARRITO
router.delete('/carrito/:idCart/producto/:idProduct', (req, res) => {
    const {idCart, idProduct} = req.params;
    const idCartIndex = cart.findIndex((cart) => cart.id === +idCart);
    const idProductIndex = cart[idCartIndex].productsList.findIndex((product) => product.id === +idProduct);
    if(!cart[idCartIndex].productsList[idProductIndex]){
        res.status(404).send('Producto no encontrado');
    }
    cart[idCartIndex].productsList.splice(idProductIndex, 1);
    return res.status(200).send('Producto eliminado!');
})



module.exports = router;