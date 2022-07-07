const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    PASSWORD: process.env.PASSWORD, 
    DATABASE: process.env.DATABASE,
    USERS: process.env.USERS,
};