class MemContainer{
    constructor(db){
        this.db = db;
    }
    getAll(){
        return this.db;
    }
    getById(id){
        return this.db[id - 1];
    }
    create(data){
        return this.db.push(data);
    }
    update(id, data){
        return this.db[+id-1] = data;
    }
    delete(id){
        return this.db.splice(+id-1, 1);
    }
}

module.exports = MemContainer;