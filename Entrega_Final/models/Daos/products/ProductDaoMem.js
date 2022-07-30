const MemContainer = require('../../Containers/mem.container');
const collection = require('../../db/db.mem').products;

class ProductsDaoMem extends MemContainer{
    constructor(){
        super(collection);
    }
}
module.exports = ProductsDaoMem;