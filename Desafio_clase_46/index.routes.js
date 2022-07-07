const Router = require('koa-router');
const router = new Router({
    prefix: '/api'
});
const products=[
    {id:1,name:'Product 1',price:100},
    {id:2,name:'Product 2',price:200},
    {id:3,name:'Product 3',price:300}
];
router.get('/', async (ctx) => {
    ctx.body = {
        succes: true,
        data: products
    }
})

router.get('/:id', async (ctx) => {
    const product = products.find(p => p.id == ctx.params.id);
    if(product){
        ctx.body = {
            succes: true,
            data: product
        }
    }else{
        ctx.body = {
            succes: false,
            message: 'Product not found'
        }
    }
});
module.exports = router;
