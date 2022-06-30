const ProductServices = require('../../services/products/products.services')
const newProductServices = new ProductServices();

class ProductControllers{
    constructor(){
        this.services = new ProductServices;
        // this.getProductsAllControllers = this.getProductsAllControllers.bind(this);
        // this.getProductsByIdControllers = this.getProductsByIdControllers.bind(this);
        // this.createControllers = this.createControllers.bind(this);
        // this.updateControllers = this.updateControllers.bind(this);
        // this.deleteControllers = this.deleteControllers.bind(this);
    }
    async getProductsAllControllers (req, res, next){
        try{
            const products = await newProductServices.getAllServices();
            return products;
        }
        catch(error){
            next(error)
        }
    }
    async getProductsByIdControllers (req, res, next){
        try{
            const {id} = req.params;
            const product = await newProductServices.getByIdServices(id)
            return product;
        }
        catch(error){
            next(error)
        }
    }
    async createControllers (req, res, next){
        try{
            const data = req.body
            const newProduct = await newProductServices.createServices(data)
            return newProduct;
        }
        catch(error){
            next(error)
        }
    }
    async updateControllers (req, res, next){}
    async deleteControllers (req, res, next){}
}

module.exports = ProductControllers;