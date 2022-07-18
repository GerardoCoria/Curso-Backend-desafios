const express = require('express');
const router = express.Router();
const{
    getalluserControllers,
    newUserControllers,
    getUserControllers
} = require('../../controllers/users.controllers');


router.get('/todos', getalluserControllers);
router.get('/register', newUserControllers);
router.post('/user', getUserControllers);

module.exports = router;