const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('conexion correcta a mongoDB')})
objetobd.on('cerror', ()=>{console.log('error en la coneccion a mongoDB')})