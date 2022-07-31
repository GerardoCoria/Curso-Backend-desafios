const {
    getalluser,
    newUserServices,
    getUserServices
} = require('../services/users.services');


const {getAllProductsServices} = require('../services/products.services');

//prueba, borrar
const getalluserControllers = async (req, res) => {
    const users = await getalluser();
    res.json(users);
}

const newUserControllers =  (req, res) => {
    const user = req.body;
    console.log('intento de registro', user);
    newUserServices(user);
    res.render('users/register-success');
}

const getUserControllers = async (req, res) => {
    const email = req.body.email;
    console.log('email en users.controllers', email);
    const user =  await getUserServices(email);
    const products = await getAllProductsServices();
    if(user){
        const username = email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1);
        res.render('products/all', { products, username });
    }
    else{
        res.redirect('/users/error');
    }
}

module.exports = {
    getalluserControllers,
    newUserControllers,
    getUserControllers
}