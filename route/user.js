const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemauser = new eschema({
  name: String,
  lastName: String,
  email: String,
  telephone: String,
  iduser: String

})

const ModeloUser = mongoose.model('user', eschemauser)
module.exports = router

/*ruta de test
router.get('/test', (req, res) => {
  res.end('Saludo carga desde ruta test')
})*/

router.post('/api/user/createuser', (req, res) => {
  const newUser = new ModeloUser({
    name: req.body.name, 
    lastName: req.body.lastName,
    email: req.body.email,
    telephone: req.body.telephone,
    iduser: req.body.iduser
  })
  newUser.save(function(err){
    if(!err){
      res.send('Usuario creado correctamente')
    }else{
      res.send(err)
    }
  })
})


