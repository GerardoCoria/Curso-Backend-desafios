const express = require('express');
const router = express.Router();

const productsRoutes = require('./products/products.routes');
const cartsRoutes = require('./carts/carts.routes');
const usersRoutes = require('./users/users.routes');
const ordersRoutes = require('./orders/orders.routes');
const messagesRoutes = require('./message/messages.routes');

router.use('/products', productsRoutes);
router.use('/carts', cartsRoutes);
router.use('/users', usersRoutes);
router.use('/orders', ordersRoutes);
router.use('/messages', messagesRoutes);


router.get('/', (req, res) => res.render('home.ejs'))
router.get('/favicon.ico', (req, res) => res.status(204));

module.exports = router;