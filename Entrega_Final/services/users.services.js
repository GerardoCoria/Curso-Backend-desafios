const { usersDao } = require('../models/Factory/factory');

const newUserServices = async (user) => {
  try{
    const newUser = await usersDao.newUser(user);
    return newUser;
  }
  catch(err){
    throw new Error(err);
  }
};

const getUserServices = async (id) => {
    try{
        const user = await usersDao.getUser(id);
        return user;
    }
    catch(err){
        throw new Error(err);
    }
};

module.exports = {
    newUserServices,
    getUserServices
}