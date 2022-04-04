const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const apiRoutes = require('./routes/products.routes');
const faker = require('faker');

app.use('/api', apiRoutes);

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
