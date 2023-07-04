const PalabraService = require('../service/palabraService')

module.exports = class PalabraService{
    constructor(){
        this.palabraService = new PalabraService()
    }

    listarPalabras = async (req,res) => {
        try{
            const resultado = await this.palabraService.listarPalabras()
            res.status(200).json(resultado)
        }catch(error){
            res.status(400).json({errorMsg: error.message})
        }
    }

    guardarPalabra = async (req,res) => {
        let palabra = req.body;
        try{
            const resultado = await this.palabraService.crearPalabra()
            res.status(200).json(resultado)
        }catch(error){
            res.status(422).json({errorMsg: error.message})
        }
    }

    eliminarPalabra = async (req,res) => {
        let {palabra} = req.params
        try{
            const resultado = await this.palabraService.eliminarPalabra(palabra)
            res.status(200).json(resultado)
        }catch(error){
            res.status(422).json({errorMsg: error.message})
        }
    }
}