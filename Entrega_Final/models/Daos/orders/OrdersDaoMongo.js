const MongoContainer = require('../../Containers/mongo.container');
const {Schema} = require('mongoose');
const collection = 'orders-list';
const ordersSchema = new Schema({
    id: String,
    products: [{
        id: String,
        name: String,
        price: Number,
        description: String,
        quantity: Number,
    }]
});
class OrdersDaoMongo extends MongoContainer{
    constructor(){
        super(ordersSchema, collection);
    }
}
module.exports = OrdersDaoMongo;