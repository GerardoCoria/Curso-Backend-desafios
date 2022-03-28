const mongoContainer = require('../../containers/mongoContainer');
const {Schema} = require('mongoose');

const collection = 'products';

const productsSchema = new Schema({
    id: Number,
    name: String,
    price: Number,
    description: String,
});

class productsMongoDao extends mongoContainer {
    constructor() {
        super(productsSchema, collection);
    }
}

module.exports = productsMongoDao; 