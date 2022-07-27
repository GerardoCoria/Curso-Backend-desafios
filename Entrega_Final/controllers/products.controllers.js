const {
    getAllProductsServices,
    getProductByIdServices,
    createProductsServices,
    updateProductsServices,
    deleteProductsServices,
} = require('../services/products.services');

const getProductControllers = async (req, res) => {
    const products = await getAllProductsServices();
    res.render('products/all', { products });
};

const getByIdControllers = async(req, res) =>{
    const { id } = req.params;
    //console.log('ID PARAMS', id);
    const product = await getProductByIdServices(id);
    //console.log('PRODUCT',product);
    res.json(product);
}

const createProductControllers = (req, res) =>{
    const datos = req.body;
    const product = createProductsServices(datos);
    res.json(product);
} 

const updateProductControllers = (req, res) =>{
    const { id } = req.params;
    const datos = req.body;
    const product = updateProductsServices(id, datos);
    res.json(product);
}

const deleteProductControllers = (req, res) =>{
    const { id } = req.params;
    const product = deleteProductsServices(id);
    res.json(product);
}

module.exports = {
    getProductControllers,
    getByIdControllers,
    createProductControllers,
    updateProductControllers,
    deleteProductControllers
};