const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node corriendo')
})

//config server basic
app.listen(5000, function(){
    console.log('servidor NODE esta corriendo en el puerto 5000')
})