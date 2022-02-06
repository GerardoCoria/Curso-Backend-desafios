// DEECLARO LA CLASE, SUS ATRIBUTOS Y SUS METODOS
class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = libros,
        this.mascotas = mascotas
    }
    getFullName(){
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}`)
    }
    addMascota(item){
        this.mascotas.push(item)
    }
    countMascotas(){
        console.log(this.mascotas.length)
    }
    addBook(item){
        this.libros.push(item)
    }
    getBookNames(){
        const nombreLibro = this.libros.map(item => item.nombre)
        console.log(nombreLibro)
        }
    }

//ASIGNO LOS VALORES DE LOS ATRIBUTOS
const usuario = new Usuario("Gerardo", "Coria", [
    {nombre: "El señor de los anillos", autor: "J.R.R. Tolkien"},
    {nombre:"1984", autor: "George Orwell"},
    {nombre:"Canción de hielo y fuego", autor: "R.R. Martin"}
], ["Otto", "Ragnar"])

//INVOCO TODOS LOS METODOS
usuario.addMascota("Emily")
console.log(usuario)
usuario.countMascotas()
usuario.addBook(
    {nombre: "El principito", autor: "Antoine de Saint-Exupéry"}
)
console.log(usuario.libros)
usuario.getBookNames()