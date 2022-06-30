const MemDao = require('../Daos/mem.dao');
const memDao = new MemDao();
//armar el dao mongo e importarlo

let pers = process.argv[2];
let productDao;

switch(pers){
    case 'mem':
        productDao = memDao;
        break;
    case 'mongo':
        productDao = mongoDao;
    default:
        productDao = memDao;
}

module.exports = productDao;