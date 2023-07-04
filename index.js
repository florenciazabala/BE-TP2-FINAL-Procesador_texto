const PalabraRouter = require('./router/palabraRouter')
const FraseRouter = require('./router/fraseRouter')

const bodyParser = require('body-parser')
const express = require('express')


const app = express()
const port = 3000
app.set('title','Cadaver exquisito')

// Parseo de request body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// Default header
header_json = {"content-type":"application/json"}

const BASE_PATH = '/cadaverexquisito.ort/v1'

app.use(BASE_PATH + '/palabras', new PalabraRouter().start())
app.use(BASE_PATH + '/frases', new FraseRouter().start())

//console.log("Env", process.env.STORAGE)
app.listen(port, () => {
    console.log(`Nuestro server está funcionando bien en el port ${port}`)
})