const firebaseContainer = require('../../containers/firebaseContainer');

class cartFirebaseDao extends firebaseContainer{
    constructor (){
        super('cart')
    }
}

module.exports = cartFirebaseDao;