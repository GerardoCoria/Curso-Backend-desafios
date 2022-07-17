const {
    newUserServices,
    getUserServices
} = require('../services/users.services');

const newUserControllers =  (req, res) => {
    const user = newUserServices(req.body);
    res.json(user);
}

const getUserControllers = (req, res) => {
    const { id } = req.params;
    const user = getUserServices(id);
    res.json(user);
}

module.exports = {
    newUserControllers,
    getUserControllers
}