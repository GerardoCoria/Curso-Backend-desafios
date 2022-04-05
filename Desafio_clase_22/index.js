const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const apiRoutes = require('./routes/index');
//const faker = require('faker');

//app.use('/api', apiRoutes);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const {commerce} = require('faker');

let array = [];

const products = () => {
    array = [];
    for (let i = 1; i < 6; i++) {
        array.push({
            id: i,
            name: commerce.product(),
            price: commerce.price()
        })
    }
}

app.get('/', (req, res) => {
    products();
    res.json(array);
    console.log(array);
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
