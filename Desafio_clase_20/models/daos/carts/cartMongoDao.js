const mongoContainer = require('../../containers/mongoContainer');
const {Schema} = require('mongoose');

const collection = 'cart';

const cartSchema = new Schema({
    products:[
        {
            type: Schema.Types.ObjectId, ref: 'products'
        }
    ]
});

class cartMongoDao extends mongoContainer {
    constructor() {
        super(cartSchema, collection);
    }
}

module.exports = cartMongoDao;
