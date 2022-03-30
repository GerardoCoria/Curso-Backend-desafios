const {env:{pers}} = require('../../config')

let productsDao;
let cartsDao;

switch(pers){
    case 'firebase':
        productsDao = require('./products/productsFirebaseDao');
        cartsDao = require('./carts/cartMongoDao');
        break;
    case 'mongoDB':
        productsDao = require('./products/productsMongoDao');
        cartsDao = require('./carts/cartMongoDao');
        break;
    default:
        console.log('Persistence not supported');
}

module.exports = {
    productsDao,
    cartsDao,
}