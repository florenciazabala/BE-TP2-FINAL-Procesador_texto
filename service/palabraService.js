const FraseRepository = require('../repository/fraseRepository')
const PalabraRepository = require('../repository/palabraRepository')
const Palabra = require('../model/palabra')
const Validator = require('../util/validator')
const BusinessError = require('../error/businessError')
const NotFoundError = require('../error/notFoundError')

module.exports = class PalabraService{

    constructor(){
        this.fraseRepository = new FraseRepository();
        this.palabraRepository = new PalabraRepository();
    }

    async listarPalabras(){
        const fraseActiva = await this.fraseRepository.buscarFraseActiva();
        const resultado = await this.palabraRepository.listarPalabras(fraseActiva.id);
        const palabrasDTO = resultado.reduce((group, word) => {
            const { value } = 0;
            group[value] = group[value] ?? 0;
            group[value].push(value++);
            return group;
          }, {});
        return resultado ? resultado : 'No se han ingresado palabras';
    }

    async crearPalabara(value){

        const fraseActiva = await this.fraseRepository.buscarFraseActiva();

        //Simula el inicio de una nueva partida
        if(!existeFraseActiva){
            fraseActiva = await this.fraseRepository.crearNuevaFrase();
        }

        if(!Validator.isValidWord(value)){
            throw BusinessError('palabra no válida')
        }

        const palabra = new Palabra(value,fraseActiva.palabras.length,fraseActiva.id)
        return await this.palabraRepository.crearPalabra(palabra)
    }

    async eliminarPalabra(value){
        if(!Validator.isValidWord(value)){
            throw BusinessError('palabra no válida')
        }

        const fraseActiva = await this.fraseRepository.buscarFraseActiva();

        const palabra = await this.palabraRepository.buscarPalabra(value,fraseActiva.id)

        if(!palabra){
            throw NotFoundError('palabra no encontrada')
        }

        return await this.palabraRepository.eliminarPalabra(value,fraseActiva.id)
    }
}