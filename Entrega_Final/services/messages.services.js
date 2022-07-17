const { messagesDao } = require('../models/Factory/factory');

const getAllMessagesServices = async () => {
    try{
        const messages = await messagesDao.getAll();
        return messages;
    }
    catch(error){
        throw new Error(error);
    }
}

const deleteMessageServices = async (id) => {
    try{
        const message = await messagesDao.deleteOne(id);
        return message;
    }
    catch(error){
        throw new Error(error);
    }
}

module.exports = {
    getAllMessagesServices,
    deleteMessageServices
};
