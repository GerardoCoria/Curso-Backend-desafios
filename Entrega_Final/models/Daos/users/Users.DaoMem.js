const MemContainer = require('../../Containers/mem.container');
const collection = require('../../db/db.mem').users;

class UsersDaoMem extends MemContainer{
    constructor(){
        super(collection);
    }
}
module.exports = UsersDaoMem;