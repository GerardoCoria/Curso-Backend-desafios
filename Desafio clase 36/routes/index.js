const express = require('express');
const productRoutes = require('./products/products.routes');
const loginRoutes = require('./login/login.routes');
const cartRoutes = require('./carts/carts.routes');
const registerRoutes = require('./register/register.routes');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}))
router.use('/', productRoutes);
router.use('/', loginRoutes);
router.use('/', cartRoutes);
router.use('/', registerRoutes);

module.exports = router;