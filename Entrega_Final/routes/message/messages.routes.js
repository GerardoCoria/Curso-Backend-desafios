const express = require('express');
const router = express.Router();
const {
    getAllMessagesControllers,
    deleteMessageControllers
} = require('../../controllers/messages.controllers');

router.get('/', getAllMessagesControllers);
router.delete('/:id', deleteMessageControllers);

module.exports = router;