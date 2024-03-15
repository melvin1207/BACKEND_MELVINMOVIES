const express = require('express')
const router = express.Router()
const { createUser, loginUser, datosUser, updateUser, softDeleteUser, destroyUser } = require('../controllers/usersController')
const { protect } = require('../middleware/authMiddleware')
const { userProtect } = require('../middleware/userMiddleware')

router.post('/', createUser)
router.post('/login', loginUser)
router.get('/datos', protect, datosUser)
router.patch('/:id', protect, userProtect, updateUser)
router.delete('/:id', protect, userProtect, softDeleteUser)
router.delete('/destroy/:id', protect, userProtect, destroyUser)

module.exports = router