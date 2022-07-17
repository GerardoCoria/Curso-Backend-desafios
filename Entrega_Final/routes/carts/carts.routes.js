const express = require('express');
const router = express.Router();
const {
    getCartControllers,
    newCartControllers,
    updateCartControllers,
    deleteCartControllers
} = require('../../controllers/carts.controllers');

router.get('/', getCartControllers);
router.post('/', newCartControllers);
router.put('/:id', updateCartControllers);
router.delete('/:id', deleteCartControllers);

module.exports = router;