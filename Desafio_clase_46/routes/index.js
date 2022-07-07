const express = require('express');
const router = express.Router();

const productsRoutes = require('./products/products.routes');

router.use('/products', productsRoutes);

module.exports = router;