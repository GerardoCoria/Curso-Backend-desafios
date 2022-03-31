const mongoose = require('mongoose');
const {dbConfig} = require('../../config')

class mongoContainer {
    constructor(Schema, collection) {
        this.conectar().then(() => console.log("Conectado a MongoDB"));
        this.model = mongoose.model(collection, Schema);
    }

    async conectar () {
        await mongoose.connect(dbConfig.mongoDB.uri);
    }

    async getAll() {
        return await this.model.find().lean();
    }

    async getById(id) {
        return await this.model.find({ _id: id }).lean();
    }

    async create(data) {
        return await this.model.create(data);
    }

    async updateById(id, data) {
        return await this.model.updateOne({ _id: id}, {$set:{...data}});
    }

    async deleteById(id) {
        return await this.model.deleteOne({ _id: id });
    }
}

module.exports = mongoContainer;