class ProductDTO{
    constructor(id, datos){
        this.id = id
        this.named = datos.named;
        this.price = datos.price;
        this.description = datos.description;
    }
}
module.exports = ProductDTO;