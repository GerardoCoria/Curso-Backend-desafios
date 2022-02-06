const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const fs = require('fs')

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

server.on('error', (err) => {
    console.log(err.message)
})

class Contenedor{
    constructor(name){
        this.name = name
    }

    async getAll(){
        const content = await fs.promises.readFile(this.name, 'utf8')
        const contentObj = JSON.parse(content)
        return contentObj
    }

    async getById(){
        const content = await fs.promises.readFile(this.name, 'utf8')
        const contentObj = JSON.parse(content)
        console.log(contentObj)
        const randomNumber= Math.floor(Math.random() * contentObj.length+1)
        console.log(randomNumber)
        const producto = contentObj[randomNumber-1]
        return producto 
    }
}

newContent = new Contenedor('productos.txt')

app.get('/productos', (req, res) => {
    newContent.getAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        console.log(err.message)
    })
})

app.get('/productoRandom', (req, res) => {
    newContent.getById()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        console.log(err.message)
    }) 
})


