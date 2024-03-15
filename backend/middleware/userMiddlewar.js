const asyncHandler = require('express-async-handler')

const userProtect = asyncHandler(async(req, res, next) =>{
  try{
    if(req.user.id !== req.params.id){
      res.status(401)
      throw new Error("Not authorized")
    } else{
      next()
    }
  } catch(error){
    console.log(error)
    res.status(401)
    throw new Error('Acceso no permitido')
  }
})

module.exports = { userProtect }