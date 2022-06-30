const productDao = require('../../models/Factory/factory')

class ProductServices{
    constructor(){
        this.productDao = productDao;
    }
    async getAllServices(){
        return await this.productDao.getAllDao();
    }
    async getByIdServices(id){
        if(!id){
            throw new Error ('ID incorrecto')
        }
        return await this.productDao.getByIdDao(id);
    }
    async createServices(data){
        return await this.productDao.createDao(data);
    }
    async updateServices(){}
    async deleteServices(){}
}

module.exports = ProductServices;