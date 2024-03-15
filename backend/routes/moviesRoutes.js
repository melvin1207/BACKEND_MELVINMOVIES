const express = require('express')
const router = express.Router()
const { createMovie, getMovies, getMovie, updateMovie, updaterateMovie, softDeleteMovie, destroyMovie } = require('../controllers/moviesController')


router.post('/', createMovie)
router.get('/', getMovies)
router.get('/:id', getMovie)
router.patch( '/update/:id', updateMovie)
router.patch('/rate/:id', updaterateMovie)
router.delete('/:id', softDeleteMovie)
router.delete('/destroy/:id', destroyMovie)

module.exports = router