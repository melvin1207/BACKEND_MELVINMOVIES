const express = require('express')
const router = express.Router()
const { createMovie, getMovies, getMovie, updateMovie, updaterateMovie, softDeleteMovie, destroyMovie } = require('../controllers/moviesController')


router.post('/', createMovie)
router.get('/', getMovies)
router.get('/:id', getMovie)
router.patch( '/:id', updateMovie)
router.patch('/rate/:id', updaterateMovie)
router.patch('/delete/:id', softDeleteMovie)
router.delete('/:id', destroyMovie)

module.exports = router