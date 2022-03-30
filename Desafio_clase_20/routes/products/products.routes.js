const {Router} = require('express');
const {
    getAllProducts,
    // getById,
    // create,
    // updateById,
    // deleteById
} = require('../../controllers/products.controllers');

const router = Router();

router.get('/', getAllProducts);

// router.get('/:id', getById);

// router.post('/', create);

// router.put('/:id', updateById);

// router.delete('/:id', deleteById);

module.exports = router;
