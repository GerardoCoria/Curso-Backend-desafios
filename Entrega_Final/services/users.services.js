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

const getUserServices = async (email) => {
  console.log('mail!', email);
  const users = await usersdao.getAll();
  const user = users.find(user => user.email === email);
  console.log('user!', user);
  if(user){
    return user;
  }
}


module.exports = {
  getalluser,
  newUserServices,
  getUserServices
}