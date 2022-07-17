const MongoContainer = require('../../Containers/mongo.container');
const {Schema} = require('mongoose');
const collection = 'users-list';
const usersSchema = new Schema({
    id: Number,
    name: String,
    email: String,
    password: String
});
class UsersDaoMongo extends MongoContainer{
    constructor(){
        super(usersSchema, collection);
    }
}
module.exports = UsersDaoMongo;