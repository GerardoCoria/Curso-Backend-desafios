const express = require('express');
const {productos} = require('../../data/data');
const router = express.Router();

router.get('/products/:id', (req, res) => {
    const {id} = req.params;
    const producto = productos.find(producto => producto.id === +id);
    if(!producto){
        res.status(404).send('Producto no encontrado');
    }
    res.render('product', {producto});
})

module.exports = router;