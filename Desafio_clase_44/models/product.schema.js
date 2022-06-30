class Product {
    constructor(id, {named, price, description}){
        this.id = id,
        this.named = named,
        this.price = price,
        this.description = description
    }
}
module.exports = Product;