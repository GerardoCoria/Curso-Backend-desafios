const LoginMongoDao = require('../models/Schemas/login.schema');
const newRegisterDao = new LoginMongoDao();

const registerNewUserApi = async (user) => {
    const newUser = await newRegisterDao.setNew(user)
    return newUser;
};

module.exports = {
    registerNewUserApi
};