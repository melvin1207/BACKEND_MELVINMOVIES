const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { use } = require('../routes/usersRoutes')

//Crear un usuario
const createUser = asyncHandler(async(req, res) => {
  //Se destructura el body de la petición
  const { first_name, last_name, email, password, phone, isAdmin } = req.body

  //Se verifica que la petición tenga todos los datos necesrios
  if(!first_name || !last_name || !email || !password || !phone || !isAdmin){
    res.status(400)
    throw new Error('Faltan datos')
  }

  //Se verifica que el emial ingresado sea unico
  const userExist = await User.findOne({ email })
  if (userExist){
    res.status(400)
    throw new Error('El correo electronico ya existe')
  }

  //Se hace el HASH del password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //Objeto para crear al usuario
  const user = await User.create({
    first_name,
    last_name,
    email,
    password: hashedPassword,
    phone,
    isAdmin
  }) 

  if(user){
    res.status(201).json({
      _id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      phone: user.phone,
      email: user.email,
      isAdmin: user.isAdmin
    })
  } else{
    res.status(400)
    throw new Error('No se pudieron guardar los datos')
  }
})

//Logear al usuario
const loginUser = asyncHandler(async(req,res) => {
  res.status(200).json({ message: 'Login user' })
})

//Obtener datos del usuario
const datosUser = asyncHandler(async(req, res) =>{
  res.status(200).json({ message: 'get user' })
})

//Actualizar un usuario
const updateUser = asyncHandler(async(req, res) =>{
  res.status(200).json({ message: 'update user' })
})

//SoftDelete de un usuario
const softDeleteUser = asyncHandler(async(req, res) =>{
  res.status(200).json({ message: 'soft delete user' })
})

//Borrar definitivamente un usuario
const destroyUser = asyncHandler(async(req, res) =>{
  res.status(200).json({ message: 'destroy user' })
})

module.exports = {
  createUser,
  loginUser,
  datosUser,
  updateUser,
  softDeleteUser,
  destroyUser
}