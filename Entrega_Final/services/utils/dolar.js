const axios = require('axios').default;
const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'

let dolar= 0;

axios.get(url)
    .then(response => {
    const infoDolar = response.data[1].casa.venta;
    return infoDolar;
    })
    .catch(error => {
        console.log(error);
    });

console.log('dolaruco',dolar);

module.exports = dolar;