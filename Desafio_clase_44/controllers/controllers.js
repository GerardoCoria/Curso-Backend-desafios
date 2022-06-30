const {
    getAllProductsServices,
    getByIdProductsServices,
    createProductsServices,
    updateProductsServices,
    deleteProductsServices
} = require('../services/services');

const getProductsControllers = () =>{
    const products = getAllProductsServices()
    return products;
};

const getProductControllers = ({id}) =>{
    const product = getByIdProductsServices(id);
    return product;
}

const createProductControllers = ({datos}) =>{
    const newProduct = createProductsServices(datos);
    return newProduct;
}

const updateProductControllers = ({id, datos}) =>{
    const product = updateProductsServices(id, datos);
    return product
} 

const deleteProductControllers = ({id}) =>{
    const product = deleteProductsServices(id);
    return product;
}

module.exports= {
    getProductsControllers,
    getProductControllers,
    createProductControllers,
    updateProductControllers,
    deleteProductControllers
}