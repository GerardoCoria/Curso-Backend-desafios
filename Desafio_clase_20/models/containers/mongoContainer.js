const mongoose = require('mongoose');
const {dbConfig} = require('../../config')

class mongoContainer {
    constructor(Schema, collection) {
        this.connect().then(() => console.log("Conectado a MongoDB"));
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

//const Usuario = mongoose.model(collection, mongoSchema);

//const url = "mongodb://localhost:27017/Desafio_clase_20";

// const Schema = mongoose.Schema;
// const collection = "products";
// const mongoSchema = new Schema({
//     name: String,
//     price: Number
// });


// const show = async () => {
//     try {
//         const response = await Usuario.find().lean();
//         console.table(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// const insertar = async () => {
//     try {
//         const newUser = await Usuario.create({
//             name: 'Producto prueba',
//             price: 1001
//         });
//         const response = await newUser.save();
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// const actualizar = async () => {
//     try {
//         const response = await Usuario.updateOne({
//             name: 'Producto prueba'
//         }, {
//             $set: {
//                 price: 1002
//             }
//         });
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// const borrar = async () => {
//     try {
//         const response = await Usuario.deleteOne({
//             name: 'Producto prueba'
//         });
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }



// conectar();
// show();
// insertar();
// actualizar();
// borrar();

// module.exports = Usuario;


// class Products {
//     constructor(id, name, price){
//         this.id = id;
//         this.name = name;
//         this.price = price;
//     }

//     creatTable = async () =>{
//         try{
//             db.createCollection('products');
//         }
//         catch(error){
//             console.log(error);
//         }
//     };
    
//     getAll = async () =>{
//         try{
//             try{
//                 db.products.find()
//             }
//             catch(error){
//                 console.log(error);
//             }
//         }
//         catch(error){
//             console.log(error);
//         }
//     };
 
//     getById = async () =>{}
      
//     createItem = async () =>{
//         try{
//             db.products.insertOne({
//                 id: this.id,
//                 name: this.name,
//                 price: this.price
//             });
//         }
//         catch(error){
//             console.log(error);
//         }
//     }
//     update = async () =>{}
//     delete = async () =>{}
// }