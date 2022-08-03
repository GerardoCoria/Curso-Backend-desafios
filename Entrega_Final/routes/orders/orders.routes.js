const express = require('express');
const router = express.Router();
const {
    getOrderControllers,
} = require('../../controllers/orders.controllers');

router.get('/', getOrderControllers);

module.exports = router;