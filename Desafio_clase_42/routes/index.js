const express = require('express');
const router = express.Router();

const productsRoutes = require('./products/products.routes');
// const cartsRoutes = require('./carts/carts.routes');
const loginRoutes = require('./login/login.routes');
const registerRoutes = require('./register/register.routes');

router.use('/products', productsRoutes);
// router.use('/carts', cartsRoutes);
router.use('/login', loginRoutes);
router.use('/register', registerRoutes);

router.get('/favicon.ico', (req, res) => res.status(204));

module.exports = router;