const admin = require("firebase-admin");
const {getFirestore} = require('firebase-admin/firestore');
const {dbConfig} = require('../../config')

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