const firebaseContainer = require('../../containers/firebaseContainer');

class productsFirebaseDao extends firebaseContainer{
    constructor (){
        super ('products')
    }
}

module.exports = productsFirebaseDao; 