//importar desde el archivo datos de models
const LoginMongoDao = require('../models/Schemas/login.schema');
const newLoginDao = new LoginMongoDao();

const getAllUsersApi = async () => {
    const users = await newLoginDao.getAll();
    return users;
};
const getUserByEmailApi = async (email) => {
    const user = await newLoginDao.getBy({email: email});
    return user;
};

module.exports = {
    getAllUsersApi,
    getUserByEmailApi
};
//exportar hacia los controladores