const registerNewUserApi = require('../api/register.api');

const registerUserControllers = async (req, res, next) => {
    res.render('register.ejs')
};

const registerNewUserController = async (req, res, next) => {
    try{
        const data = req.body;
        const user = await registerNewUserApi(data)
        res.json(user)
    }
    catch(error){
        next(res.render('error', {error}));
    }
};

module.exports = {
    registerNewUserController,
    registerUserControllers
};