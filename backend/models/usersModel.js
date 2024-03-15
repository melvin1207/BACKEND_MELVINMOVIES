const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  first_name:{
    type: String,
    required: [true, 'Por favor ingrese el nombre']
  },
  last_name:{
    type: String,
    required: [true, 'Por favor ingresa el apellido']
  },
  email:{
    type: String,
    required: [true, 'Ingresa el email del comprador']
  },
  password:{
    type: String,
    required: [true, 'Ingresa la contraseña']
  },
  phone:{
    type: Number,
    required: [true, 'Ingresa el numero de telefono']
  },
  isAdmin:{
    type: Boolean,
    required: [true, 'El usuario es administrador?']
  },
  active:{
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userSchema)