const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    PORT: process.env.PORT,
    DATABASE: process.env.DATABASE,
    PASSWORD: process.env.PASSWORD,
    PERS: process.env.PERS,
};