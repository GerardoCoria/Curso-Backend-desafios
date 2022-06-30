const {v4:uuid} = require('uuid');
const ProductDTO = require('../Dto/products.dto');
const productDto = new ProductDTO();

class MemDao {
    constructor(){
        this.db = []
    }

    async getAllDao () {
        return this.db
    }
    async getByIdDao (id) {
        const product = this.db.find((item)=> item.id == id);
        if(!product){
            throw new Error ('No existe el producto')
        }
        return product
    }
    async createDao (data) {
        try{
            const newProduct = new productDto(data, uuid());
            this.db.push(newProduct);
            return newProduct;
        }
        catch(error){
            throw new Error ('Error en crear producto')
        }
    }
    async updateDao () {}
    async deleteDao () {}
}

module.exports = MemDao;