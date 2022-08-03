const {productsDao} = require('../models/Factory/factory');
const productsdao = new productsDao();

// const ProductsDTO = require('../models/DTO/products.dto');
// const axios = require('axios').default;
// const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'

// const getDolar = async () =>{
//    try{
//          const response = await axios.get(url);
//          const infoDolar = response.data[1].casa.venta;
//          return infoDolar;
//    }
//     catch(error){
//         console.log('Error en GetDolar:',error);
//     }
// };

// let dolar = getDolar()
// dolar.then(valor => {
//     dolar = parseInt(valor);
// }).catch(error => {
//     console.log(error);
// });

// const repositoryData = async () =>{
//     const product = await productsdao.getAll();
   
//     console.log('dolar en api', dolar)
//     console.log(typeof dolar)
//     const products = product.map(product => new ProductsDTO(product, dolar));
//     products.map (product => {
//         product.infoStock = stock[product.item - 1];
//     })
//     return products;
// }

const getAllProductsServices = async () =>{
    try{
        const product = productsdao.getAll()
        return product;
    }
    catch(error){
        throw new Error(error);
    }
}

const getProductByIdServices = async (id) =>{
    try{
        const idProduct = id;
        const products = await productsdao.getAll();
        const item = products.find(product => product._id == idProduct);
        return item;
    }
    catch(error){
        throw new Error(error);
    }
}

const createProductsServices = (datos) =>{
    try{
        const products = productsdao.getAll();
        const id = products.length + 1;
        const newProduct = new Product(id, datos);
        productsDao.create(newProduct);
        return newProduct;
    }
    catch(error){
        throw new Error (error);
    }
}

const updateProductsServices = (item, datos)=>{
    try{
        const id = +item;
        const product = new Product(id, datos);
        productsdao.update(id, product);
        return product;
    }
    catch(error){
        throw new Error (error)
    }
}

const deleteProductsServices = (id) =>{
    try{
        const product = productsdao.delete(id);
        return product;
    }
    catch(error){
        throw new Error (error)
    }
}

module.exports = {
    getAllProductsServices,
    getProductByIdServices,
    createProductsServices,
    updateProductsServices,
    deleteProductsServices,
}