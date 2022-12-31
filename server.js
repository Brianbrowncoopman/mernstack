const express = require('express')
const app = express()

//importar coneccion mongo db
const archivoBD = require('./conection')

//importacion archivo rutas y usuario
const rutauser = require('./route/user')

//import y conf bodyparser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/user', rutauser)

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node corriendo')
})

//config server basic
app.listen(5000, function(){
    console.log('servidor NODE esta corriendo en el puerto 5000')
})