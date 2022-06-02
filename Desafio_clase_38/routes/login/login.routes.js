const express = require('express');
const router = express.Router();
const {
    loginPageController,
    getAllUsersController,
    getUserByEmailController
} = require('../../controllers/login.controllers');

router.get('/', loginPageController);
router.post('/', getUserByEmailController);
router.get('/users', getAllUsersController);

module.exports = router;