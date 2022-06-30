const productsDB = require('../../db/data');

class DaoMem{
    constructor(){
        this.db = productsDB;
    }
    getAll(){
        return this.db;
    }
    getById(id){
        return this.db[id];
    }
    create(data){
        return this.db[data.id] = data;
    }
    update(data){
        return this.db[data.id] = data;
    }
    delete(id){
        return delete this.db[id];
    }
}

module.exports = DaoMem;