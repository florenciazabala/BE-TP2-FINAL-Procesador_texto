const MongoDBConnection = require('../config/mongodbConnection')
const mongo = require('mongodb')

module.exports = class PalabraDAO {

  constructor() {
    this.collection = MongoDBConnection.getInstance().getDb().collection('palabras')
  }

  listarPalabras = async (fraseId) =>{
    const result = await this.collection.findOne({ fraseId: fraseId});
    return result;
  }

  crearPalabra = async (palabra) =>{
    const result = await this.collection.insertOne(palabra);
    return result;
  }

  eliminarPalabra = async (value, fraseId) =>{
    const result = await this.collection.deleteOne({value: value, fraseId: fraseId});
    return result;
  }
}