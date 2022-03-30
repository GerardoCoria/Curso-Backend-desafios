const admin = require("firebase-admin");
const {getFirestore} = require('firebase-admin/firestore');
const {dbConfig} = require('../../config')


const serviceAccount = require('../db/firebase.config.json');



class firebaseContainer {
    constructor(coll){
        this.connect();
        const db = getFirestore();
        this.query = db.collection(coll); 
    }
    connect(){
        admin.initializeApp({
        credential: admin.credential.cert(dbConfig.firebase.credential),
        });
        console.log('Conectado a Firebase');
    }
    async getAll() {
        const docRef = await this.query.get();
        const documents = docRef.docs;
        return documents.map(doc => ({
            id: doc.id,
            ...doc.data()
        })
        );
    }

    async getById(id) {
        const docRef = this.query.doc(id);
        const documents = await docRef.get();
        return documents.data();
    }

    async create(data) {
        const docRef = this.query.doc();
        return await docRef.set(data);
    }

    async updateById(id, data) {
        const docRef = this.query.doc(id);
        return await docRef.update(data);
    }

    async deleteById(id) {
        const docRef = this.query.doc(id);
        return await docRef.delete();
    }
}

module.exports = firebaseContainer;

// const db = getFirestore();
// const createItem = async () => {
    
//     try{
//         let docRef = db.collection('products').doc();
//         await docRef.set({
//             name: 'Producto 1 prueba',
//             price: 100
//         });
//         console.log('Item creado');
//     }
//     catch{
//         console.log(error);
//     }
// }
// const getAll = async () => {
//     const querys = await db.collection('products').get();
//     const docs = querys.docs;
//     try{
//         const response = docs.map((doc) => ({
//             id : doc.id,
//             name: doc.data().name,
//             price: doc.data().price
//         }));
//         console.table(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// createItem();
// getAll();