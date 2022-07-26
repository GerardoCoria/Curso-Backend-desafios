const {
    getalluser,
    newUserServices,
    getUserServices
} = require('../services/users.services');

//prueba, borrar
const getalluserControllers = async (req, res) => {
    const users = await getalluser();
    res.json(users);
}

const newUserControllers =  (req, res) => {
    res.render('users/register');
}

const getUserControllers = async (req, res) => {
    const email = req.params;
    const user =  await getUserServices(email);
    if(user){
    res.redirect('/products');
    }
    else{
        res.render('users/error-login');
    }
}

module.exports = {
    getalluserControllers,
    newUserControllers,
    getUserControllers
}