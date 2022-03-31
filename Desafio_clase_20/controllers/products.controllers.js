const {ProductsDao} = require('../models/daos/index');
const productDao = new ProductsDao();

const getAllProducts = async (req, res, next) => {
    try{
        const products = await productDao.getAll();
        res.json(products);
    }
    catch(err){
        next(err);
    }
}

const getProductsById = async (req, res, next) => {
    const {id} = req.params;
    try{
        const product = await productDao.getById(id);
        res.json(product);
    }
    catch(err){
        next(err);
    }
}

const createProducts = async (req, res, next) => {
    try{
        const newProduct = await productDao.create(req.body);
        res.json(newProduct);
    }
    catch(err){
        next(err);
    }
}

const updateProductsById = async (req, res, next) => {
    const {params:{id}, body} = req;
    try{
        const updateProduct = await productDao.updateOne(id, body);
        res.json(updateProduct);
    }
    catch(err){
        next(err);
    }
}

const deleteProductsById = async (req, res, next) => {
    const {id} = req.params;
    try{
        const deleteProduct = await productDao.deleteOne(id);
        res.json(deleteProduct);
    }
    catch(err){
        next(err);
    }
}

module.exports = {
    getAllProducts,
    getProductsById,
    createProducts,
    updateProductsById,
    deleteProductsById
}