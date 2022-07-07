const mongoose = require('mongoose');
const config = require('../../config');
const productSchema = require('../Schemas/Mongo/products.schema');

class MongoDao{
    constructor(collection, Schema){
        this.connect().then(()=>{console.log('Conectado a MongoDB')});
        this.model = mongoose.model(collection, Schema);
    }
    async connect(){
        await mongoose.connect(`mongodb+srv://gcoria1989:${config.PASSWORD}@cluster0.c5lzx.mongodb.net/${config.DATABASE}?retryWrites=true&w=majority`);
    }
    async getAll(){
        return await this.model.find();
    }
    async getById(id){
        return await this.model.find(id);
    }
    async create(product){
        return await this.model.create(product);
    }
    async update(id, product){
        return await this.model.updateOne({_id: id}, product);
    }
    async delete(id){
        return await this.model.deleteOne({_id: id});
    }
}
module.exports = MongoDao;