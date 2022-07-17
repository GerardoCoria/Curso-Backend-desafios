const express = require('express');
const router = express.Router();
const {
    getOrderControllers,
    newOrderControllers,
    deleteOrderControllers
} = require('../../controllers/orders.controllers');

router.get('/', getOrderControllers);
router.post('/', newOrderControllers);
router.delete('/:id', deleteOrderControllers);

module.exports = router;