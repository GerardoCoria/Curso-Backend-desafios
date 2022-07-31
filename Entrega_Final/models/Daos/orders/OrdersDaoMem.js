const MemContainer = require('../../Containers/mem.container');
const collection = require('../../db/db.mem').orders;

class OrdersDaoMem extends MemContainer{
    constructor(){
        super(collection);
    }
}
module.exports = OrdersDaoMem;