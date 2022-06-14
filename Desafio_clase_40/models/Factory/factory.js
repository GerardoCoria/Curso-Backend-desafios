// ejecutar en la linea de comandos:
// nodemon server file
// nodemon server mongo

let pers = process.argv[2];
let productFactory;

switch(pers){
    case 'mongo':
        productFactory = require('../Schemas/products.schema');
        break;
    case 'file':
        productFactory = require('../Daos/fileDao');
        break;
    default:
        console.log('Persistence not supported');
}

module.exports = productFactory; 