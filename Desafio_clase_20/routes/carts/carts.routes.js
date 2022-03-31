const {Router} = require('express');
const {
    getAllCarts,
    getCartsById,
    createCarts,
    updateCartsById,
    deleteCartsById
} = require('../../controllers/carts.controllers');

const router = Router();

router.get('/', getAllCarts);

router.get('/:id', getCartsById);

router.post('/', createCarts);

router.put('/:id', updateCartsById);

router.delete('/:id', deleteCartsById);

module.exports = router;