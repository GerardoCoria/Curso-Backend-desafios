const { Schema }= require('mongoose');

const productSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    item: String,
})

module.exports = productSchema;