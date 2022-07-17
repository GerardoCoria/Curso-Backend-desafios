const { PERS } = require('../../config');

let productsDao;
let cartsDao;
let usersDao;
let ordersDao;
let messagesDao;

switch(PERS){
    case 'mongo':
        productsDao = require('../Daos/products/ProductsDaoMongo');
        cartsDao = require('../Daos/carts/CartDaoMongo');
        usersDao = require('../Daos/users/UsersDaoMongo');
        ordersDao = require('../Daos/orders/OrdersDaoMongo');
        messagesDao = require('../Daos/message/MessagesDaoMongo');
        break;
    case 'mem':
        productsDao = require('../Daos/products/ProductDaoMem');
        cartsDao = require('../Daos/products/ProductDaoMem');
        usersDao = require('../Daos/products/ProductDaoMem');
        ordersDao = require('../Daos/products/ProductDaoMem');
        messagesDao = require('../Daos/products/ProductDaoMem');
        break;
    default:
        throw new Error('Persistence not supported');
};

module.exports = {
    productsDao,
    cartsDao,
    usersDao,
    ordersDao,
    messagesDao
}