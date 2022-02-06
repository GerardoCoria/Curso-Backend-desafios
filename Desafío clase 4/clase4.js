const fs = require('fs')

// CREO LA CLASE CON LOS ATRIBUTOS Y METODOS
class Contenedor {
    constructor(nombre)
    {
        this.nombre = nombre
    }
    // METODO PARA AGREGAR UN PRODUCTO
    async saved(items){
        try{
            const content = await fs.promises.readFile(this.nombre, 'utf8')
            const contentObj = JSON.parse(content)
            contentObj.push({
                title: items.title,
                price: items.price,
                id: contentObj.length + 1
            })
            await fs.promises.writeFile(this.nombre, JSON.stringify(contentObj, null, 2))
            console.log(`El N° de ID asignado es: ${contentObj.length}`)
        }
        catch(err){
            console.log(err.message)
        }
    }
    // METODO PARA BUSCAR UN PRODUCTO
    async getById(id){
        const content = await fs.promises.readFile(this.nombre, 'utf8')
        const contentObj = JSON.parse(content)
        const producto = contentObj.find(item => item.id == id)
        if (producto) {
            console.log(`El producto solicitado con ID ${id} es: ${producto.title}`)
        }
        else{
            return console.log('No se encontro el producto')
        }
    }
    // METODO PARA MOSTRAR TODOS LOS PRODUCTOS
    async getAll(){
        const content = await fs.promises.readFile(this.nombre, 'utf8')
        const contentObj = JSON.parse(content)
        console.log("Estos son todos los productos: ")
        console.log(contentObj)
    }
    // METODO PARA ELIMINAR UN PRODUCTO SEGUN SU ID
    async deleteById(id){
        const content = await fs.promises.readFile(this.nombre, 'utf8')
        const contentObj = JSON.parse(content)
        const producto = contentObj.find(item => item.id == id)
        if (producto) {
            contentObj.splice(contentObj.indexOf(producto), 1)
            console.log(contentObj)
            await fs.promises.writeFile('producto.txt', JSON.stringify(contentObj, null, 2))
        }
        else{
            return console.log('No se encontro el producto')
        }
    }
    //METODO PARA BORRAR TODOS LOS PRODUCTOS
    async deleteAll(){
        const content = await fs.promises.readFile(this.nombre, 'utf8')
        const contentObj = JSON.parse(content)
        const emptyContent = contentObj
        emptyContent.splice(0, contentObj.length)
        console.log(emptyContent)
        console.log(contentObj)
        await fs.promises.writeFile('producto.txt', JSON.stringify(emptyContent, null, 2))
    }
}

// CREO UN OBJETO DE LA CLASE
const contenedor1 = new Contenedor('producto.txt')

// DESCOMENTAR EL MÉTODO A EJECUTAR!
contenedor1.saved({title: "Chocolate", price: "11"})
//contenedor1.getById(1)
//contenedor1.getAll()
//contenedor1.deleteById(3)
//contenedor1.deleteAll()
