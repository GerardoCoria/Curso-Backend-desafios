//importar de la carpeta API
const {
    getAllProductsApi,
    getProductByIdApi,
} = require('../api/products.api');


const getAllProductsControllers = async (req, res, next) => {
    try{
        const products = await getAllProductsApi();
        res.render('all', {products});
    }
    catch(err){
        next(err);
    }
};

const getProductByIdControllers = async (req, res, next) => {
    try{
        const { id } = req.params;
        const product = await getProductByIdApi(id);
        res.json(product);
    }
    catch(err){
        next(err);
    }
};

module.exports = {
    getAllProductsControllers,
    getProductByIdControllers,
};