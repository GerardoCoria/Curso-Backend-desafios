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

module.exports = router;