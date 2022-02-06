const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
app.get('/', (req, res) => {
    res.send(`<h1>Hola Otto y Ragnar</h1>
            <h2>Ustedes son unos michis bonitos</h2>`)
})