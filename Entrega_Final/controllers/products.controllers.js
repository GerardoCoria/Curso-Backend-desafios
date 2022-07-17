const {
    getAllProductsServices,
    getProductByIdServices,
    createProductsServices,
    updateProductsServices,
    deleteProductsServices,
} = require('../services/products.services');


const getProductControllers = (req, res) => {
    const products = getAllProductsServices();
    res.json(products)
};

const getByIdControllers = (req, res) =>{
    const { id } = req.params;
    const product = getProductByIdServices(id);
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