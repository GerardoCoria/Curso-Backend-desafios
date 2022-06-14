const productFactory = require('../models/Factory/factory');
const newProductDao = new productFactory;

const ProductsDTO = require('../models/DTO/products.dto');
const dolar = require('../api/utils/dolar');
const stock = require('../db/stock');

const repositoryData = async () =>{
    const product = await newProductDao.getAll();
    const products = product.map(product => new ProductsDTO(product, dolar.venta));
    products.map (product => {
        product.infoStock = stock[product.item - 1];
    })
    return products;
}

const getAllProductsApi = async () =>{
    return await repositoryData();
}

const getProductByIdApi = async (id) =>{
    const product = await repositoryData();
    return product.find(product => product.item == id);
}

module.exports = {
    getAllProductsApi,
    getProductByIdApi,
}