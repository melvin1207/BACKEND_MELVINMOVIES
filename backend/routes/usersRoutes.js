const express = require('express')
const router = express.Router()
const {   createUser, loginUser, datosUser, updateUser, softDeleteUser, destroyUser } = require('../controllers/usersController')

router.post('/', createUser)
router.post('/login', loginUser)
router.get('/datos', datosUser)
router.patch('/:id', updateUser)
router.delete('/:id', softDeleteUser)
router.delete('/destroy/:id', destroyUser)

module.exports = router