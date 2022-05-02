const dbConfig = require('./config.env');

module.exports = {
  mongodb: {
    connectTo: (database) => `mongodb+srv://gcoria1989:${dbConfig.DB_PASSWORD}@cluster0.c5lzx.mongodb.net/desafio_clase_26?retryWrites=true&w=majority`,
  }
}