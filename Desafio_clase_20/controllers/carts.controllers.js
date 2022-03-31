const {CartsDao} = require('../models/daos/index');
const cartDao = new CartsDao();

const getAllCarts = async (req, res, next) => {
    try{
        const products = await cartDao.getAll();
        res.json(products);
    }
    catch(err){
        next(err);
    }
}

const getCartsById = async (req, res, next) => {
    const {id} = req.params;
    try{
        const product = await cartDao.getById(id);
        res.json(product);
    }
    catch(err){
        next(err);
    }
}

const createCarts = async (req, res, next) => {
    try{
        const newProduct = await cartDao.create(req.body);
        res.json(newProduct);
    }
    catch(err){
        next(err);
    }
}

const updateCartsById = async (req, res, next) => {
    const {params:{id}, body} = req;
    try{
        const updateProduct = await cartDao.updateOne(id, body);
        res.json(updateProduct);
    }
    catch(err){
        next(err);
    }
}

const deleteCartsById = async (req, res, next) => {
    const {id} = req.params;
    try{
        const deleteProduct = await cartDao.deleteOne(id);
        res.json(deleteProduct);
    }
    catch(err){
        next(err);
    }
}

module.exports = {
    getAllCarts,
    getCartsById,
    createCarts,
    updateCartsById,
    deleteCartsById
}