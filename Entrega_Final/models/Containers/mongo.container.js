const mongoose = require('mongoose');
const configEnv = require('../../config');
class MongoContainer{
    constructor(Schema, collection){
        this.connectToMongo().then(() => console.log('Conectado a MongoDB!'));
        this.model = mongoose.model(collection, Schema);
    }
    async connectToMongo(){
        await mongoose.connect(`mongodb+srv://gcoria1989:${configEnv.PASSWORD}@cluster0.c5lzx.mongodb.net/${configEnv.DATABASE}?retryWrites=true&w=majority`);
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
module.exports = MongoContainer;