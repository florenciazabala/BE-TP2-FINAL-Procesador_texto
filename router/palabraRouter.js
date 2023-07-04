const express = require('express')
const PalabraController = require('../controller/palabraController')

module.exports = class HabitacionesRouter {
    constructor(){
        this.router = express.Router()
        this.palabraController = new PalabraController()
    }

    start(){
        this.router.get('/', this.palabraController.listarPalabras)
        this.router.post('/', this.palabraController.guardarPalabra)
        this.router.delete('/:palabra?', this.palabraController.removerPalabra)
        
        return this.router
    }
}