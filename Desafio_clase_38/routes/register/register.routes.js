const express = require('express');
const router = express.Router();
const {
    registerNewUserController,
    registerUserControllers
} = require('../../controllers/register.controllers');

router.get('/', registerUserControllers);

router.post('/', registerNewUserController);

module.exports = router;