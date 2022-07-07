const Koa = require('koa');
const KoaBody = require('koa-body');
const app = new Koa();
const port = process.env.PORT || 3000;

app.use(KoaBody());
const apiRoutes = require('./controllers/controllers.koa');

app.use(apiRoutes.routes());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});