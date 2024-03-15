const express = require('express')
const router = express.Router()
const { createUser, loginUser, datosUser, updateUser, softDeleteUser, destroyUser } = require('../controllers/usersController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', createUser)
router.post('/login', loginUser)
router.get('/datos', protect, datosUser)
router.patch('/:id', protect, updateUser)
router.delete('/:id', protect, softDeleteUser)
router.delete('/destroy/:id', protect, destroyUser)

module.exports = router