const { ordersDao } = require('../models/Factory/factory');
const ordesdao = new ordersDao();

const getOrdersServices = async () => {
    try{
        const order = await ordesdao.getAll();
        return order;
    }
    catch(err){
        throw new Error(err);
    }
}

const newOrderServices = async () => {
    try{
        const order = await ordesdao.create(req.body);
        return order;
    }
    catch(err){
        throw new Error(err);
    } 
}

const deleteOrderServices = async (id) => {
    try{
        const order = await ordesdao.deleteOne(id);
        return order;
    }
    catch(err){
        throw new Error(err);
    }
}

module.exports = {
    getOrdersServices,
    newOrderServices,
    deleteOrderServices
};