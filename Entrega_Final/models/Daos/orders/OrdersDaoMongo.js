const MongoContainer = require('../../Containers/mongo.container');
const {Schema} = require('mongoose');
const collection = 'orders-list';
const ordersSchema = new Schema({
    id: Number,
    userId: Number,
    products: [{
        id: Number,
        quantity: Number
    }]
});
class OrdersDaoMongo extends MongoContainer{
    constructor(){
        super(ordersSchema, collection);
    }
}
module.exports = OrdersDaoMongo;