const dbconfig = require('../db/config');
const knex = require('knex')(dbconfig.mariaDB);

const creatingTable = async () => {
    try{
        const tableExist = await knex.schema.hasTable('tableProducts');
        if(!tableExist){
            await knex.schema.createTable('tableProducts', (table) => {
                table.increments('id');
                table.string('name').notNullable();
                table.integer('price').unsigned();
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
}
const readTable = async () => {
        try{
            const result = await knex.from('tableProducts').select('*');
            console.table(result);
        }
        catch(error){
            console.log(error);
            throw error;
        }
        finally{
            knex.destroy();
        }
}

const updateTable= async (nameP, price) => {
        try{
            await knex('tableProducts').insert({
                nameP: nameP,
                price: price
            })
        }
        catch(error){
            console.log(error);
            throw error;
        }
        finally{
            knex.destroy();
        }
    }
const deleteTable= async () => {
        try{
            await knex('tableProducts').del();
            console.log('Tabla borrada');
        }
        catch(error){
            console.log(error);
            throw error;
        }
        finally{
            knex.destroy();
        }
    }


module.exports = {
    creatingTable,
    readTable,
    updateTable,
    deleteTable
}
