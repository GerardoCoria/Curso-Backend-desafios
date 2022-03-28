const admin = require("firebase-admin");
const {getFirestore} =require('firebase-admin/firestore');
const serviceAccount = require('../db/firebase.config.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
console.log("Inicializado");

class firebaseContainer {
    constructor(collection){
        
    }
}



const db = getFirestore();
const createItem = async () => {
    
    try{
        let docRef = db.collection('products').doc();
        await docRef.set({
            name: 'Producto 1 prueba',
            price: 100
        });
        console.log('Item creado');
    }
    catch{
        console.log(error);
    }
}
const getAll = async () => {
    const querys = await db.collection('products').get();
    const docs = querys.docs;
    try{
        const response = docs.map((doc) => ({
            id : doc.id,
            name: doc.data().name,
            price: doc.data().price
        }));
        console.table(response);
    }
    catch(error){
        console.log(error);
    }
}

createItem();
getAll();