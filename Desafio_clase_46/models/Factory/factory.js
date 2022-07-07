const MemDao = require('../Daos/Dao.Mem');
const MongoDao = require('../Daos/Dao.Mongo');
const productSchema = require('../Schemas/Mongo/products.schema');

let pers = process.argv[2];
let productDao = null;
console.log('pers:', pers);
console.log('productDao:', productDao);

switch(pers){
    case 'mem':
        productDao = new MemDao();
        break;
    case 'mongo':
        productDao = new MongoDao('products-list', productSchema);
        break;
    default:
        productDao =  new MemDao();
}

console.log('el elegido es:', productDao)

module.exports = productDao;