const MemContainer = require('../../Containers/mem.container');
const collection = require('../../db/db.mem').carts;

class CartsDaoMem extends MemContainer{
    constructor(){
        super(collection);
    }
}
module.exports = CartsDaoMem;