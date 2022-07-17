const MongoContainer = require('../../Containers/mongo.container');
const {Schema} = require('mongoose');
const collection = 'carts-list';
const cartsSchema = new Schema({
    id: Number,
    userId: Number,
    products: [{
        id: Number,
        quantity: Number
    }]
});
class CartDaoMongo extends MongoContainer{
    constructor(){
        super(cartsSchema, collection);
    }
};
module.exports = CartDaoMongo;