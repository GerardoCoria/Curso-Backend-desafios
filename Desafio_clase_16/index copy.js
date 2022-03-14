// const dbconfig = require('./db/config');
// const knex = require('knex')(dbconfig.mariaDB);

// class Contenedor{
//     constructor(config, table){
//         this.config = config;
//         this.table = table;
//     }
//     creatingTable = async () => {
//         try{
//             const tableExist = await knex.schema.hasTable('table');
//             if(!tableExist){
//                 await knex.schema.createTable('table', (table) => {
//                     table.increments('id');
//                     table.string('name').notNullable();
//                     table.integer('price').unsigned();
//                 });
//                 console.log('Tabla creada');
//             }
//             else{
//                 console.log('La tabla ya existe');
//             }
//         }
//         catch(error){
//             console.log(error);
//             throw error;
//         }
//         finally{
//             knex.destroy();
//         }
//     }
//     readTable = async () => {
//         try{
//             const result = await knex.from('table').select('*');
//             console.table(result);
//         }
//         catch(error){
//             console.log(error);
//             throw error;
//         }
//         finally{
//             knex.destroy();
//         }
//     }
//     updateTable= async () => {
//         try{
//             await knex('table').insert({
//                 name: 'Pizza',
//                 price: 100
//             })
//         }
//         catch(error){
//             console.log(error);
//             throw error;
//         }
//         finally{
//             knex.destroy();
//         }
//     }
//     deleteTable= async () => {
//         try{
//             await knex('table').del();
//             console.log('Tabla borrada');
//         }
//         catch(error){
//             console.log(error);
//             throw error;
//         }
//         finally{
//             knex.destroy();
//         }
//     }
// }

// newContenedor = new Contenedor(knex, 'table');
// // newContenedor.creatingTable();
// // newContenedor.updateTable();
// // newContenedor.readTable();
// newContenedor.deleteTable();