const {Router} = require('express'); 
const router = Router();
const ProductControllers = require('../../controllers/products/products.controllers')
const newProductControllers = new ProductControllers();

class ProductRoutes{
    constructor(){
        this.controllers = new ProductControllers();
    }
    initialize(){
        router.get('/', newProductControllers.getProductsAllControllers);
        router.get('/:id', newProductControllers.getProductsByIdControllers);
        router.post('/', newProductControllers.createControllers);
        router.put('/:id', newProductControllers.updateControllers);
        router.delete('/id:', newProductControllers.deleteControllers);
        return router;
    }

}

module.exports = new ProductRoutes();