const{
    getAllMessagesServices,
    deleteMessageServices
} = require('../services/messages.services');

const getAllMessagesControllers = (req, res) => {
    const messages = getAllMessagesServices();
    res.json(messages);
}

const deleteMessageControllers = (req, res) => {
    const id = req.params.id;
    const message = deleteMessageServices(id);
    res.json(message);
}

module.exports = {
    getAllMessagesControllers,
    deleteMessageControllers
};
