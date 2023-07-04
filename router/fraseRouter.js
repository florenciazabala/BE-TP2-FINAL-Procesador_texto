const express = require('express')
const FraseController = require('../controller/fraseController')

module.exports = class FraseRouter {
    constructor(){
        this.router = express.Router()
        this.fraseController = new FraseController()
    }

    start(){
        this.router.get('/', this.fraseController.listarFrase)
        return this.router
    }
}