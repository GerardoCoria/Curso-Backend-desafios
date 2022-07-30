const MenContainer = require('../../Containers/mem.container');
const collection = 'products-list-mem';

const productsMem = {}
class ProductsDaoMem extends MongoContainer{
    constructor(){
        super(productsMem, collection);
    }
}
module.exports = ProductsDaoMem;