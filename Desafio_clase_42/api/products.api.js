const productFactory = require('../models/Factory/factory');
const newProductDao = new productFactory;

const ProductsDTO = require('../models/DTO/products.dto');
const stock = require('../db/stock');
//const { consoleLogger } = require('./utils/logger');

// const {dolar} = require('../api/utils/dolar');
const axios = require('axios').default;
const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'

const getDolar = async () =>{
   try{
         const response = await axios.get(url);
         const infoDolar = response.data[1].casa.venta;
         return infoDolar;
   }
    catch(error){
        console.log(error);
    }
}

let dolar = getDolar()
dolar.then(valor => {
    dolar = parseInt(valor);
}).catch(error => {
    console.log(error);
});

const repositoryData = async () =>{
    const product = await newProductDao.getAll();
   
    console.log('dolar en api', dolar)
    console.log(typeof dolar)
    const products = product.map(product => new ProductsDTO(product, dolar));
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