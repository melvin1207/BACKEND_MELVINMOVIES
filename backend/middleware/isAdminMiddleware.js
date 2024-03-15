const asyncHandler = require('express-async-handler')

const isAdminProtect = asyncHandler(async(req, res, next) =>{
  try{
    if(req.user.isAdmin !== true){
      res.status(401)
      throw new Error("Not authorized as an admin")
    } else{
      next()
    }
  } catch(error){
    console.log(error)
    res.status(401)
    throw new Error('Acceso no permitido no es un administrados')
  }
})

module.exports = { isAdminProtect }