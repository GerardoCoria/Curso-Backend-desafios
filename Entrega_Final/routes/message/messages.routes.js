const express = require('express');
const router = express.Router();
const {
    getAllMessagesControllers,
    newMessageControllers,
    deleteMessageControllers
} = require('../../controllers/messages.controllers');

router.get('/', getAllMessagesControllers);
router.post('/', newMessageControllers);
router.delete('/delete', deleteMessageControllers);

module.exports = router;