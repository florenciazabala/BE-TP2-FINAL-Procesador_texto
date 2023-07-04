const PalabraDAO = require('../DAO/palabraDAO')

module.exports = class PalabraDAO{

    constructor(){
        this.palabraDAO = new PalabraDAO()
    }

    async listarPalabras(fraseId){
        await this.palabraDAO.listarPalabras(fraseId);
    }

    async crearPalabra(palabra){
        await this.palabraDAO.crearPalabra();
    }

    async eliminarPalabra(value){
        await this.palabraDAO.eliminarPalabra();
    }
}