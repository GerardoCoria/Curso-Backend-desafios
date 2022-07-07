const dao = require('../models/Factory/factory')
const Product = require('../models/Schemas/Mem/product.dto');

const getAllProductsServices = () =>{
    try{
        const products = dao.getAll();
        return products;
    }
    catch(err){
        throw new Error ('No existe el producto')
    }
}

const getByIdProductsServices = (id) =>{
    try{
        const product = dao.getById(id);
        const products = dao.getAll();
        if (id <= products.length){
            return product
        }
        else{
            throw new Error ('No existe el producto')
        }
    }
    catch(err){
        throw new Error ('No existe el producto')
    }
}

const createProductsServices = (datos) =>{
    try{
        const products = dao.getAll();
        const id = products.length + 1;
        const newProduct = new Product(id, datos);
        dao.create(newProduct);
        return newProduct;
    }
    catch(error){
        throw new Error ('Error en crear el producto')
    }
}

const updateProductsServices = (item, datos)=>{
    try{
        const id = +item;
        const product = new Product(id, datos);
        dao.update(id, product);
        return product;
    }
    catch(error){
        throw new Error ('No se pudo actualizar el producto')
    }
}

const deleteProductsServices = (id) =>{
    try{
        const product = dao.delete(id);
        return product;
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