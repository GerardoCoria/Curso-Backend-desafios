const Router = require('koa-router');
const router = new Router({
    prefix: '/products'
});

const {
    getAllProductsServices,
    getByIdProductsServices,
    createProductsServices,
    updateProductsServices,
    deleteProductsServices
} = require('../services/products.services');

router.get('/all', async (ctx) => {
    ctx.body = {
        status: 'success',
        data: getAllProductsServices()
    }
});

router.get('/:id', async (ctx) => {
    const { id } = ctx.params;
    const products = getAllProductsServices();
    if (id <= products.length) {
        ctx.body = {
            status: 'success',
            data: getByIdProductsServices(id)
        }
    }
    else {
        ctx.body = {
            status: 'error',
            message: 'No existe el producto'
        }
    }
});

router.post('/new', async (ctx) => {
    if(!ctx.request.body){
        ctx.body = {
            status: 'error',
            message: 'No se recibieron datos'
        }
    }
    else{
        const newProduct = createProductsServices(ctx.request.body);
        ctx.body = {
            status: 'success',
            data: newProduct
        };
    }
});

router.put('/:id', async (ctx) => {
    if(!ctx.request.body){
        ctx.body = {
            status: 'error',
            message: 'No se recibieron datos'
        }
    }
    else{
        const { id } = ctx.params;
        const product = updateProductsServices(id, ctx.request.body);
        ctx.body = {
            status: 'success',
            data: product
        };
    }
});

router.delete('/:id', async (ctx) => {
    if(!ctx.request.body){
        ctx.body = {
            status: 'error',
            message: 'No se recibieron datos'
        }
    }
    else{
        const { id } = ctx.params;
        const product = deleteProductsServices(id);
        ctx.body = {
            status: 'success',
            data: product
        };
    }
});

module.exports = router;