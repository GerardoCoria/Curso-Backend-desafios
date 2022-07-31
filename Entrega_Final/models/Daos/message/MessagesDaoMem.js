const MemContainer = require('../../Containers/mem.container');
const collection = require('../../db/db.mem').messages;

class MessagesDaoMem extends MemContainer{
    constructor(){
        super(collection);
    }
}
module.exports = MessagesDaoMem;