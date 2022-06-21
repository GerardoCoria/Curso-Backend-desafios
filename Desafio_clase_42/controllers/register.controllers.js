const registerNewUserApi = require('../api/login.api');

const registerUserControllers = async (req, res, next) => {
    res.send('registerUserControllers');
};

const registerNewUserController = async (req, res, next) => {
    try{
        const {username, email, password} = req.body;
        const user = await registerNewUserApi(username, email, password);
        res.json(user);
    }
    catch(error){
        next(res.render('error', {error}))
    }
};

module.exports = {
    registerNewUserController,
    registerUserControllers
};