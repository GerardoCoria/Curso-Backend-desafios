const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    DB_PASSWORD: process.env.DB_PASSWORD,
    ACCOUNT_SID: process.env.ACCOUNT_SID,
    ACCOUNT_TOKEN: process.env.ACCOUNT_TOKEN
};