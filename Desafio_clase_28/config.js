const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    SESSION_SECRET: process.env.SESSION_SECRET,
    DB_PASSWORD: process.env.DB_PASSWORD,
};