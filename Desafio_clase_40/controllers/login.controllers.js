const {
    getAllUsersApi,
    getUserByEmailApi
} = require('../api/login.api');

const loginPageController = (req, res) => {res.render('login')};

const getAllUsersController = async (req, res) => {
    const users = await getAllUsersApi();
    res.json(users);
};

const getUserByEmailController = async (req, res, next) => {
    try{
        let {email, username, password} = req.body;
        const user = await getUserByEmailApi(email);
        if(user.length > 0){
            req.session.username = username;
            req.session.password = password;
            req.session.email = email;
            console.log(req.session);
            res.render('index', {username})
        }
        else{
            res.render('error-login')
        }
    }
    catch(error){
        next(res.render('error', {error}))
    };
};

module.exports = {
    loginPageController,
    getAllUsersController,
    getUserByEmailController
};