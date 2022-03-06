const express = require('express');

const productRoutes = require('./productos.routes.js');
const cartRoutes = require('./carrito.routes.js');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}))
router.use('/', productRoutes);
router.use('/', cartRoutes);


module.exports = router;