const express = require('express');
const router = express.Router();
const {
    getCartControllers,
    newItemInCartControllers,
    updateCartControllers,
    deleteCartControllers
} = require('../../controllers/carts.controllers');

router.get('/', getCartControllers);
router.get('/:id', newItemInCartControllers);
router.put('/:id', updateCartControllers);
router.delete('/:id', deleteCartControllers);

module.exports = router;