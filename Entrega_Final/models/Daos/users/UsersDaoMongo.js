const MongoContainer = require('../../Containers/mongo.container');
const {Schema} = require('mongoose');
const collection = 'users-lists';
const usersSchema = new Schema({
    name: String,
    id: String,
    email: String,
    password: String
});
class UsersDaoMongo extends MongoContainer{
    constructor(){
        super(usersSchema, collection);
    }
};

module.exports = UsersDaoMongo;