const DaoMem = require('../models/Daos/dao.mem');
const daoMem = new DaoMem();


const Product = require('../models/product.schema')
const {v4:uuid} = require('uuid')

const getAllProductsServices =  ()=>{
    try{
        const products =  Object.values(daoMem.getAll());
        return products;
    }
    catch(err){
        throw new Error ('No existe el producto')
    }
}

const getByIdProductsServices = (id) =>{
    try{
        const product = daoMem.getById(id);
        return product
    }
    catch(err){
        throw new Error ('No existe el producto')
    }
}

const createProductsServices = (datos) =>{
    try{
        const id = uuid();
        const newProduct = new Product(id, datos);
        daoMem.create(newProduct);
        return newProduct;
    }
    catch(error){
        throw new Error ('Error en crear el producto')
    }
}

const updateProductsServices = (id, datos)=>{
    try{
        const updating = new Product(id, datos);
        daoMem.update(updating);
        return updating;
    }
    catch(error){
        throw new Error ('No se pudo actualizar el producto')
    }
}

const deleteProductsServices = (id) =>{
    try{
        const toDelete = daoMem.delete(id);
        return toDelete;
    }
    catch(error){
        throw new Error ('No se pudo eliminar el producto')
    }
}

module.exports = {
    getAllProductsServices,
    getByIdProductsServices,
    createProductsServices,
    updateProductsServices,
    deleteProductsServices
}