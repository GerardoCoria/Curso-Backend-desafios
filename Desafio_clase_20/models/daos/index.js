const {env:{pers}} = require('../../config');

let ProductsDao;
let CartsDao;

switch(pers){
    case 'firebase':
        ProductsDao = require('./products/productsFirebaseDao');
        CartsDao = require('./carts/cartFirebaseDao');
        break;
    case 'mongo':
        ProductsDao = require('./products/productsMongoDao');
        CartsDao = require('./carts/cartMongoDao');
        break;
    default:
        console.log('Persistence not supported');
}

module.exports = {
    ProductsDao,
    CartsDao,
}