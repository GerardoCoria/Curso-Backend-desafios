const moment = require('moment');

const messages = [{
    author:{
        id: 'gg@gg',
        name: 'Otto',
        age: 6,
        alias: 'Peludito'
    },
    text: 'holaa, tengo hambre humano',
    time: moment().format('DD/MM/YYYY HH:mm:ss')

}];

module.exports = messages;