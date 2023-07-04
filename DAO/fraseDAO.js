const MongoDBConnection = require('../config/mongodbConnection')
const mongo = require('mongodb')

module.exports = class FraseDAO {

  constructor() {
    this.collection = MongoDBConnection.getInstance().getDb().collection('frases')
  }

  buscarFraseActiva = async() => {
    const result = await this.collection.findOne({ active: true});
    return result;
  }

  crearFrase = async(frase) =>{
    const result = await this.collection.insertOne(frase);
    return result;
  }

  actualizarFrase = async(id, frase)  => {
    const result = await this.collection.updateOne({ _id: new mongo.ObjectId(id)},{ $set : frase})
    return result;
  }
}