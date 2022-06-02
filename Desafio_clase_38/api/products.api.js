//importar desde el archivo datos de models
const ProductsMongoDao = require ('../models/Schemas/products.schema');
const newProductDao = new ProductsMongoDao();

const getAllProductsApi = async () =>{
    const products = await newProductDao.getAll();
    return products;
}

const getProductByIdApi = async (id) =>{
    const product = await newProductDao.getBy({item: id});
    return product;
}

module.exports = {
    getAllProductsApi,
    getProductByIdApi,
}


//exportar hacia los controladores
