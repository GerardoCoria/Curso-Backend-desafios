const port = process.env.port || 8080;
const pers = process.env.pers;
const firebaseConfig = require('./db/firebase.config.json');

module.exports = {
    env:{
        port,
        pers
    },
    dbConfig:{
        mongoDB:{
            uri: 'mongodb://localhost:27017/Desafio_clase_20',
        },
        firebase:{
            credential: firebaseConfig
        }
    }
}