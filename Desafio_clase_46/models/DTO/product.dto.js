class ProductsDTO{
    constructor(datos, dolar){
        this.item = datos.item;
        this.name = datos.name;
        this.price = datos.price;
        this.description = datos.description;
        this.dolar = dolar;
        this.priceDolar = this.price / this.dolar;
    }
}
module.exports = ProductsDTO;