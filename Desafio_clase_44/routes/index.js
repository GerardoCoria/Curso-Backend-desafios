const {Router} = require('express')
const router = Router();
const productRoutes = require('./products/products.routes');

router.use('/', productRoutes.initialize());

module.exports = router;