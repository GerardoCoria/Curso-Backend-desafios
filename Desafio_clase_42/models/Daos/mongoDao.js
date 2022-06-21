const mongoose = require('mongoose');
const configEnv = require('../../config.env');
const {logger} = require('../../api/utils/logger');
class MongoDao{
    constructor(Schema, collection){
        let singleton = null;
        if(singleton == true){
            return singleton;
        }
        else{  
            singleton = this;
            this.connectToMongo().then(() => logger.info('Conectado a MongoDB!'));
        }
        this.model = mongoose.model(collection, Schema);
    }
    async connectToMongo(){
        await mongoose.connect(`mongodb+srv://gcoria1989:${configEnv.PASSWORD}@cluster0.c5lzx.mongodb.net/${configEnv.DATABASE}?retryWrites=true&w=majority`);
    }
    async getAll(){
        return await this.model.find();
    }
    async getBy(id){
        return await this.model.find(id);
    }
    async setNew(data){
        return await this.model.create(data);
    }
}
module.exports = MongoDao;