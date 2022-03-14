const dbconfig = require('../db/config');
const knex = require('knex')(dbconfig.sqlite);

const addUser = async () => {
    try{
    
    }
    catch(error){
        console.log(error);
        throw error;
    }
    finally{
        knex.destroy();
    }   
};
addUser();