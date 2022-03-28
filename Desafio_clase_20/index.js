const express = require('express');
const app = express();
const {env:{port}}=require('./config');

const apiRoutes = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({extended:true}));  

app.use('api', apiRoutes)

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
}
);
    