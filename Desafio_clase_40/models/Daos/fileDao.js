const {logger} = require('../../api/utils/logger');
const products = require('../../db/products');

class FileDao{
    constructor(file){
        this.file = file;
        let singleton = null;
        if(singleton == true){
            return singleton;
        }
        else{  
            singleton = this;
            this.connectToFile().then(() => logger.info('Conectado a File!'));
        }
    }
    async connectToFile(){
        return await this.file;
    }
    async getAll(){
        return await this.file;
    }
    async getBy(id){
        return await this.file;
    }
}

class newFileDao extends FileDao{
    constructor(){
        super(products);
    }
}

module.exports = newFileDao;