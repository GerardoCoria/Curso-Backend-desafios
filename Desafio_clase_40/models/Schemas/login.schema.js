const MongoDao = require('../Daos/mongoDao');
const { Schema } = require('mongoose');
const collection = require('../../config.env').USERS;
const loginSchema = new Schema({
    name: String,
    password: String,
    email: String,
});
class LoginMongoDao extends MongoDao {
    constructor() {
        super(loginSchema, collection);
    }
};
module.exports = LoginMongoDao;