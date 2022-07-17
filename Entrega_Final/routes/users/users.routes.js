const express = require('express');
const router = express.Router();
const{
    newUserControllers,
    getUserControllers
} = require('../../controllers/users.controllers');

router.post('/', newUserControllers);
router.get('/:id', getUserControllers);

module.exports = router;