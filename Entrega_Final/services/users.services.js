const { usersDao } = require('../models/Factory/factory');

//prueba, borrar
const UsersDaoMongo = require('../models/Daos/users/UsersDaoMongo');
//const usersDaoMongo = new UsersDaoMongo();
const usersdao = new UsersDaoMongo();
const getalluser = async () => {
    try{
        const users = await usersdao.getAll();
        console.log(users);
        return users;
    }
    catch(err){
        throw new Error(err);
    }
}
//fin de prueba ---------------------

const newUserServices = async (user) => {
  try{
    const newUser = await usersDao.create(user);
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