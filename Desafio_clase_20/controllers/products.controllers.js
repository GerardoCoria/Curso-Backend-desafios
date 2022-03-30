const {productsDao} = require('../models/daos/index');

const productDao = productsDao;


const getAllProducts = async (req, res, next) => {
    try{
        const products = await productDao.getAll();
        res.json(products);
    }
    catch(err){
        next(err);
    }
}

// const getProductsById = async (req, res, next) => {
//     const {id} = req.params;
//     try{
//         const product = await productDao.getById(id);
//         res.json(product);
//     }
//     catch(err){
//         next(err);
//     }
// }

// const createProducts = async (req, res, next) => {}

// const updateProductsById = async (req, res, next) => {}

// const deleteProductsById = async (req, res, next) => {}

module.exports = {
    getAllProducts,
    // getById,
    // create,
    // updateById,
    // deleteById
}