const express = require('express');
const router = express.Router();
const products = require('./products.js');

router.get('/', (req, res) => {
    res.send(products);
});

router.get('/:idProduct', (req, res) => {
    const {idProduct} = req.params;
    const product = products[idProduct-1];
    if (product) {
        res.send(product);
    } else {
        res.send('No existe el producto');
    }
});

router.post('/', (req, res) => {
    const {name, price} = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        price
    };
    products.push(newProduct);
    return res.json(newProduct);
});

router.put('/:idProduct', (req, res) => {
    const {idProduct} = req.params;
    const {name, price} = req.body;
    const index = products.findIndex(product => product.id === idProduct);
    products[index]={
        id: products[index].id,
        name,
        price
    };
})

router.delete('/:idProduct', (req, res) => {
    const {idProduct} = req.params;
    const index = products.findIndex(product => product.id === idProduct);
    products.splice(index, 1);
})

module.exports = router;