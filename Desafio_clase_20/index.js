const express = require('express');
const app = express();
const {env:{port}}=require('./config');

const apiRoutes = require('./routes/index');

app.use('/api', apiRoutes)

app.use(express.json());
app.use(express.urlencoded({extended:true}));  

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});