const{
    getAllMessagesServices,
    newMessagesServices,
    deleteMessageServices
} = require('../services/messages.services');


const getAllMessagesControllers = async (req, res) => {
    const messages = await getAllMessagesServices();
    //const newMessage = await newMessagesServices(message);
    res.render('message/chat', {messages});
}

const newMessageControllers = async (req, res, msj) => {
    // const msj = req.body;
    const messages = await getAllMessagesServices();
    let newMessage = await newMessagesServices(msj);
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
