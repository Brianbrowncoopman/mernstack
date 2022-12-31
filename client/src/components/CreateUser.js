import React, { useState} from 'react';
import uniquid from 'uniqid';
import axios from 'axios';

//crear usuario
function CreateUser(){

  //Hooks
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')



  function  createUser(){
    var user = {
      name: name,
      lastName: lastName,
      email: email,
      telephone: telephone,
      iduser: uniquid()
    }
    console.log(user)

    axios.post('/api/user/createuser', user)
    .then(res => {
      alert(res.data)})
    .then(err => {console.log(err)})
  }


  return(
    <div className='container'>
      <div className='row'>
        <h2 className='mt-4'> Crear nuevo usuario</h2>
      </div>

      <div className='row'>
        <div className='col-sm-6 offset-3'>
          <div className='mb-3'>
            <label htmlForm='name' className='form-label'>Nombre</label>
            <input type='text' className='form-control' value={name} onChange={(e) => {setName(e.target.value)}}></input>
          </div>

          <div className='mb-3'>
            <label htmlForm='lastName' className='form-label'>Apellido</label>
            <input type='text' className='form-control' value={lastName} onChange={(e) =>{setLastName(e.target.value)}}></input>
          </div>

          <div className='mb-3'>
            <label htmlForm='email' className='form-label'>Email</label>
            <input type='email' className='form-control'value={email} onChange={(e) =>{setEmail(e.target.value)}}></input>
          </div>

          <div className='mb-3'>
            <label htmlForm='telephone' className='form-label'>Teléfono</label>
            <input type='text' className='form-control'value={telephone} onChange={(e) =>{setTelephone(e.target.value)}}></input>
          </div>

          <button  onClick={createUser} className='btn btn-success'>Guardar Usuario</button>
        </div>
      </div>
    </div>
  )
}

export default CreateUser