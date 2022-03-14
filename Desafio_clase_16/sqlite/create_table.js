const dbconfig = require('../db/config');
const knex = require('knex')(dbconfig.sqlite);

const addUser = async () => {
    try{
        const tableExist = await knex.schema.hasTable('userMichis');
        if(!tableExist){
            await knex.schema.createTable('userMichis', (table) => {
                table.increments('idMichi');
                table.string('nameMichi').notNullable();
                table.integer('ageMichi').unsigned();
                table.string('locationMichi').notNullable();
        });
        console.log('Tabla creada');
        }
        else{
            console.log('La tabla ya existe');
        }
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