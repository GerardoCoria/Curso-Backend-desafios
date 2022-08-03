const { usersDao } = require('../models/Factory/factory');
const usersdao = new usersDao();

const getalluser = async () => {
    try{
        const users = await usersdao.getAll();
        return users;
    }
    catch(err){
        throw new Error(err);
    }
}

const newUserServices = async (user) => {
  try{
    const newUser = await usersdao.create(user);
    return newUser;
  }
  catch(err){
    throw new Error(err);
  }
};

const getUserServices = async (data) => {
  const users = await usersdao.getAll();
  const user = users.find(item => item.email == data);
  if(user){
    return user;
  }
  else{
    return false;
  }
};

module.exports = {
  getalluser,
  newUserServices,
  getUserServices
}