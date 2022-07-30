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
        cartsDao = require('../Daos/carts/CartsDaoMem');
        usersDao = require('../Daos/users/UsersDaoMem');
        ordersDao = require('../Daos/orders/OrdersDaoMem');
        messagesDao = require('../Daos/message/MessageDaoMem');
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