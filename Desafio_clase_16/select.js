// const dbconfig = require('./db/config');
// const knex = require('knex')(dbconfig.mariaDB);

// const addUser = async () => {
//     try{
//         const data = await knex.from('userMichis').select('*');
//         console.table(data);
//     }
//     catch(error){
//         console.log(error);
//         throw error;
//     }
//     finally{
//         knex.destroy();
//     }   
// };
// addUser();