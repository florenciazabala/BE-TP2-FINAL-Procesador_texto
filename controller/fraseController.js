const FraseService = require('../service/fraseService')

module.exports = class PalabraService{
    constructor(){
        this.fraseService = new FraseService()
    }

    listarFrase = async (req,res) => {
        const {current} = req.require
        try{
            let resultado;
            if(current){
                resultado = await this.fraseService.listarFraseActiva();
            }else{
                resultado = await this.fraseService.listarFrases();
            }
             
            res.status(200).json(resultado)
        }catch(error){
            res.status(404).json({errorMsg: error.message})
        }
    }
}