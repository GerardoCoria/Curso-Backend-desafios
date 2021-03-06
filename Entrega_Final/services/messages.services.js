const { messagesDao } = require('../models/Factory/factory');
const messagesdao = new messagesDao();

const getAllMessagesServices = async () => {
    try{
        const messages = await messagesdao.getAll();
        return messages;
    }
    catch(error){
        throw new Error(error);
    }
};

const newMessagesServices = async (message) => {
    try{
        let msj = {
            username: message.username,
            text: message.text,
            date: new Date().toLocaleString()
        };
        const newMessage = await messagesdao.create(msj);
        return newMessage;
    }
    catch(error){
        throw new Error(error);
    }
} 

const deleteMessageServices = async () => {
    try{
        const message = await messagesdao.deleteOne();
        return message;
    }
    catch(error){
        throw new Error(error);
    }
}

module.exports = {
    getAllMessagesServices,
    newMessagesServices,
    deleteMessageServices
};
