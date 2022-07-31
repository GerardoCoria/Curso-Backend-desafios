const { usersDao } = require('../models/Factory/factory');
const usersdao = new usersDao();

const getalluser = async () => {
    try{
        const users = await usersdao.getAll();
        console.log('user en services',users);
        console.log('user daos es ', usersdao);
        return users;
    }
    catch(err){
        throw new Error(err);
    }
}
//fin de prueba ---------------------

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
  console.log('DATA', data);
  const users = await usersdao.getAll();
  console.log('USERS', users);
  console.log('USER 1', users[0])
  const user = users.find(item => item.email == data);
  console.log('USER', user);
  if(user){
    return user;
  }
  else{
    return false;
  }
}

//const item = products.find(product => product._id == idProduct);


module.exports = {
  getalluser,
  newUserServices,
  getUserServices
}