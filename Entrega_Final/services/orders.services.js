const { ordersDao } = require('../models/Factory/factory');

const getOrdersServices = async () => {
    try{
        const order = await ordersDao.getAll();
        return order;
    }
    catch(err){
        throw new Error(err);
    }
}

const newOrderServices = async () => {
    try{
        const order = await ordersDao.create(req.body);
        return order;
    }
    catch(err){
        throw new Error(err);
    }
}

const deleteOrderServices = async (id) => {
    try{
        const order = await ordersDao.deleteOne(id);
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