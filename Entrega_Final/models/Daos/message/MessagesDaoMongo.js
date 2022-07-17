const MongoContainer = require('../../Containers/mongo.container');
const {Schema} = require('mongoose');
const collection = 'messages-list';
const messagesSchema = new Schema({
    id: Number,
    userId: Number,
    message: String
});
class MessagesDaoMongo extends MongoContainer{
    constructor(){
        super(messagesSchema, collection);
    }
}
module.exports = MessagesDaoMongo;