const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require('graphql');
const {
    getProductsControllers,
    getProductControllers,
    createProductControllers,
    updateProductControllers,
    deleteProductControllers
} = require('./controllers/controllers')


const schema = buildSchema(`
    type ProductsAll{
        id: ID!,
        named: String,
        price: Int,
        description: String
    }
    type Product{
        id: ID!,
        named: String,
        price: Int,
        description: String
    }
    input ProductInput {
        named: String,
        price: Int,
        description: String 
    }
    type Query {
        getProductsControllers:[ProductsAll]
        getProductControllers(id: ID!): Product
    }
    type Mutation {
        createProductControllers(datos: ProductInput): Product
        updateProductControllers(id: ID!, datos: ProductInput): Product
        deleteProductControllers(id: ID!): Product
    }
`);
 
const app = express();
const port = process.env.port || 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', graphqlHTTP({
    schema,
    rootValue: {
        getProductsControllers,
        getProductControllers,
        createProductControllers,
        updateProductControllers,
        deleteProductControllers
    },
    graphiql: true
}));

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
});