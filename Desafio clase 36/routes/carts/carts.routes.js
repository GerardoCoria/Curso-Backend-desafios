const express = require('express');
const router = express.Router();

const cart = require('../../data/cart')
const newCart = cart[0].productsList;



router.get('/cart', (req, res) => {
    res.render('cart', {newCart})
})

module.exports = router;