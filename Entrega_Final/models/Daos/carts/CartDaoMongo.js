const MongoContainer = require('../../Containers/mongo.container');
const {Schema} = require('mongoose');
const collection = 'carts-list';
const cartsSchema = new Schema({
    id: String,
    products: [{
        id: String,
        name: String,
        price: Number,
        description: String,
        quantity: Number,
    }]
});
class CartDaoMongo extends MongoContainer{
    constructor(){
        super(cartsSchema, collection);
    }
};
module.exports = CartDaoMongo;