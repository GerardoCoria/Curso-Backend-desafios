const {Router} = require('express');
const {
    getAllProducts,
    getProductsById,
    createProducts,
    updateProductsById,
    deleteProductsById
} = require('../../controllers/products.controllers');

const router = Router();

router.get('/', getAllProducts);

router.get('/:id', getProductsById);

router.post('/', createProducts);

router.put('/:id', updateProductsById);

router.delete('/:id', deleteProductsById);

module.exports = router;