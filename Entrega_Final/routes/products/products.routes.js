const express = require('express');
const router = express.Router();
const {
    getProductControllers,
    getByIdControllers,
    createProductControllers,
    updateProductControllers,
    deleteProductControllers
} = require('../../controllers/products.controllers');



router.get('/', getProductControllers);
router.get('/:id', getByIdControllers);
router.post('/', createProductControllers);
router.put('/:id', updateProductControllers);
router.delete('/:id', deleteProductControllers);

module.exports = router;