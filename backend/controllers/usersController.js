const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')

//Crear un usuario
const createUser = asyncHandler(async(req, res) => {
  res.status(200).json({ message: 'Create user' })
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