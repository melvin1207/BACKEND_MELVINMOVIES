const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')


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
  //se destructura la petición
  const { email, password } = req.body

  //se verifica qu exista un usuario con el email ingrsado
  const user = await User.findOne({ email })

  //si el usuario existe se verifica el password
  if(user && (await bcrypt.compare(password, user.password))){
    res.status(200).json({
      _id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      token: generarToken(user.id)
    })
  } else{
    res.status(400)
    throw new Error('Acceso no autorizado')
  }
})

//Obtener datos del usuario
const datosUser = asyncHandler(async(req, res) =>{
  res.status(200).json(req.user)
})

//Actualizar un usuario
const updateUser = asyncHandler(async(req, res) =>{
  const userUpdated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-password')
  res.status(200).json(userUpdated)
})

//SoftDelete de un usuario
const softDeleteUser = asyncHandler(async(req, res) =>{
  const userDesactivated = await User.findByIdAndUpdate(req.params.id, { active: true }, { new: true }).select('-password')
  res.status(200).json(userDesactivated)
})

//Borrar definitivamente un usuario
const destroyUser = asyncHandler(async(req, res) =>{
  const user = await User.findById(req.params.id)

  if(!user){
    res.status(400)
    throw new Error('El usuario no existe')
  } else{
    await User.deleteOne(user)
    res.status(200).json({ id: req.params.id })
  }
})

//funcion para generar el token
const generarToken = (id_user) => {
  return jwt.sign({ id_user }, process.env.JWT_SECRET, {
      expiresIn: '2h'
  })
}

module.exports = {
  createUser,
  loginUser,
  datosUser,
  updateUser,
  softDeleteUser,
  destroyUser
}