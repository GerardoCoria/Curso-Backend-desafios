const express = require('express');
const {productos} = require('../data/data.js');
const router = express.Router();
const userForbidden = require('.././middlewares/userForbidden');


//RUTA GET PARA OBTENER TODOS LOS PRODUCTOS
router.get('/productos', (req, res) => {
    res.send(productos);
});

//RUTA GET PARA OBTENER UN PRODUCTO POR ID
router.get('/productos/:id', (req, res) => {
    const {id} = req.params;
    const producto = productos.find(producto => producto.id === +id);
    if(!producto){
        res.status(404).send('Producto no encontrado');
    }
    res.send(producto);
});

// router.use(userForbidden);

//RUTA POST PARA CREAR UN PRODUCTO
router.post('/productos', userForbidden, (req, res) => {
    const {name, description, price} = req.body;
    if(!name || !description || !price){
        res.status(400).send('Faltan datos');
    }
    const newProduct = {
        id: productos.length + 1,
        name,
        description,
        price
    };
    productos.push(newProduct);
    res.status(200).send(`${newProduct.name} creado correctamente!`);
})

//RUTA PUT PARA ACTUALIZAR UN PRODUCTO
router.put('/productos/:id', userForbidden, (req, res) => {
    const {params: {id}, body: {name, description, price}} = req;
    if (!name || !description || !price) {
        return res.status(400).send('Faltan datos');
    };
    const productIndex = productos.findIndex((product) => product.id === +id);
    const newProduct = {
        ...productos[productIndex],
        name,
        description,
        price
    };
    productos[productIndex] = newProduct;
    res.status(200).send(`${newProduct.name} modificado correctamente!`);
})

//RUTA DELETE PARA ELIMINAR UN PRODUCTO
router.delete('/productos/:id', userForbidden, (req, res) => {
    const {id} = req.params;
    const productIndex = productos.findIndex((product) => product.id === +id);
    productos.splice(productIndex, 1);
    return res.status(200).send('Producto eliminado!');
});

module.exports = router;