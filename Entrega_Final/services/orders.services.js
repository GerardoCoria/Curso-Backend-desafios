const { ordersDao } = require('../models/Factory/factory');
const ordersdao = new ordersDao();

const getOrdersServices = async () => {
    try{
        const order = await ordersdao.getAll();
        return order;
    }
    catch(err){
        throw new Error(err);
    }
}

const newOrderServices = async () => {
    try{
        const order = await ordersdao.create(req.body);
        return order;
    }
    catch(err){
        throw new Error(err);
    } 
}

const deleteOrderServices = async (id) => {
    try{
        const order = await ordersdao.deleteOne(id);
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