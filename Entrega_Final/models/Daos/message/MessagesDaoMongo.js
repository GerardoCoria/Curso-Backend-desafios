const MongoContainer = require('../../Containers/mongo.container');
const {Schema} = require('mongoose');
const collection = 'messages-list';
const messagesSchema = new Schema({
    username: String,
    text: String
});
class MessagesDaoMongo extends MongoContainer{
    constructor(){
        super(messagesSchema, collection);
    }
}
module.exports = MessagesDaoMongo;