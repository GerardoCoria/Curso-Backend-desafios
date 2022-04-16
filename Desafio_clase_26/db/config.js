const env = require('./env.config');

module.exports={
    // mongodb:{
    //     connectTo:(database) => `mongodb+srv://gcoria1989:${env.DB_PASSWORD}@cluster0.c5lzx.mongodb.net/${database}?retryWrites=true&w=majority`,
    // },
    secret: env.SESSION_SECRET,
    password: env.DB_PASSWORD,

}