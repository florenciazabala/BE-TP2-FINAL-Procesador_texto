const FraseRepository = require('../repository/fraseRepository')
const Frase = require('../model/frase')


module.exports = class FraseService{

    constructor(){
        this.fraseRepository = new FraseRepository();
    }

    async crearFrase(){
        const frase = new Frase();
        return await this.fraseRepository.crearFrase();
    }

    async listarFraseActiva(){
        return await this.fraseRepository.listarFraseActiva();
    }

    async listarFrases(){
        return await this.fraseRepository.listarFrase();
    }
}