const RegisterMongoDao = require('../models/Schemas/login.schema');
const newRegisterDao = new RegisterMongoDao();

const registerNewUserApi = async (user) => {
    const newUser = await newRegisterDao.setNew(user);
    return newUser;
};

module.exports = {
    registerNewUserApi
};