const FraseDAO = require('../DAO/fraseDAO')

module.exports = class FraseDAO{

    constructor(){
        this.fraseDAO = new FraseDAO()
    }

    async buscarFraseActiva(){
        this.fraseDAO.buscarFraseActiva();
    }

    async crearNuevaFrase(){
        this.fraseDAO.crearFrase();
    }
} 