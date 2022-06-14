const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    PASSWORD: process.env.PASSWORD, 
    DATABASE: process.env.DATABASE,
    COLLECTION: process.env.COLLECTION,
    USERS: process.env.USERS,
};