class ProductsDTO{
    constructor(datos, dolar){
        this._id = datos._id;
        this.name = datos.name;
        this.price = datos.price;
        this.description = datos.description;
        this.dolar = dolar;
        this.priceDolar = (this.price / this.dolar).toFixed(2);
    }
}
module.exports = ProductsDTO;