const {Router} = require('express');
const router = Router();

router.get('/productos-test', (req, res) => {
    res.send('Hola desde el router');
});

module.exports = router;