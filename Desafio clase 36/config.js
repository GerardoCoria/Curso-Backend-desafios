const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    DB_PASSWORD: process.env.DB_PASSWORD,
    ACCOUNT_SID: process.env.ACCOUNT_SID,
    ACCOUNT_TOKEN: process.env.ACCOUNT_TOKEN,
    WHATSAPP_TWILIO: process.env.WHATSAPP_TWILIO,
    WHATSAPP_CLIENT: process.env.WHATSAPP_CLIENT
};