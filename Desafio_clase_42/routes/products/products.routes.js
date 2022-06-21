const express = require('express');
const router = express.Router();
const {
    getAllProductsControllers,
    getProductByIdControllers,
} = require('../../controllers/products.controllers');

router.get('/all', getAllProductsControllers);
router.get('/:id', getProductByIdControllers); 

module.exports = router;