const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')

const protect = asyncHandler(async(req, res, next) => {
  let  token
  
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try{
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await User.findById(decoded.id_user).select('-password')
      
      next()
    } catch(error){
      console.log(error)
      res.status(401)
      throw new Error('Acceso no permitido')
    }
  }

  if(!token){
    res.status(401)
    throw new Error('No hay un token disponible, acceso no autorizado')
  }
})

module.exports = { protect }