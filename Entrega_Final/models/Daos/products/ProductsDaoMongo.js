const MongoContainer = require('../../Containers/mongo.container');
const {Schema} = require('mongoose');
const collection = 'products-list';
const productsSchema = new Schema({
    id: String,
    name: String,
    price: Number,
    description: String
});
class ProductsDaoMongo extends MongoContainer{
    constructor(){
        super(productsSchema, collection);
    }
}
module.exports = ProductsDaoMongo;