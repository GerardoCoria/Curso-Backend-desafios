const MongoDao = require('../Daos/mongoDao');
const { Schema } = require('mongoose');
const collection = require('../../config.env').COLLECTION;
const productsSchema = new Schema({
    name: String,
    item: String,
    price: Number,
    description: String,
});
class ProductsMongoDao extends MongoDao {
    constructor() {
        super(productsSchema, collection);
    }
};
module.exports = ProductsMongoDao;