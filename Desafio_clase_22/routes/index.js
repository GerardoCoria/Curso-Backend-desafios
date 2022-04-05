const express = require('express');
const userRoutes = require('./products.routes');


const router = express.Router();

router.use('/products', userRoutes);

module.exports = router;