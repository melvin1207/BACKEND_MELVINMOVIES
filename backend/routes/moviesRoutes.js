const express = require('express')
const router = express.Router()
const { createMovie, getMovies, getMovie, updateMovie, updaterateMovieLike, updaterateMovieDislike, softDeleteMovie, activateMovie, destroyMovie } = require('../controllers/moviesController')
const { protect } = require('../middleware/authMiddleware')
const { isAdminProtect } = require('../middleware/isAdminMiddleware')

router.post('/', protect, isAdminProtect, createMovie)
router.get('/', protect, getMovies)
router.get('/:id', protect, getMovie)
router.patch( '/update/:id', protect, isAdminProtect, updateMovie)
router.patch( '/activate/:id', protect, isAdminProtect, activateMovie)
router.patch('/like/:id', protect, updaterateMovieLike)
router.patch('/dislike/:id', protect, updaterateMovieDislike)
router.delete('/:id', protect, isAdminProtect, softDeleteMovie)
router.delete('/destroy/:id', protect, isAdminProtect, destroyMovie)

module.exports = router