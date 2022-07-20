const{
    getAllMessagesServices,
    newMessagesServices,
    deleteMessageServices
} = require('../services/messages.services');

const getAllMessagesControllers = async (req, res) => {
    const messages = await getAllMessagesServices();
    res.render('message/chat', {messages});
}

const newMessageControllers = async (req, res) => {
    const message = req.body;
    const messages = await getAllMessagesServices();
    const newMessage = await newMessagesServices(message);
    res.render('message/chat', {messages});
}

const deleteMessageControllers = async (req, res) => {
    // const id = req.params.id;
    const message = await deleteMessageServices();
    res.json(message);
} 
 
module.exports = {
    getAllMessagesControllers,
    newMessageControllers,
    deleteMessageControllers
};
