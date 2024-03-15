const asyncHandler = require('express-async-handler')
const Movie = require('../models/moviesModel')

//Crear una pelicula
const createMovie = asyncHandler(async(req, res) => {
  res.status(200).json({ message: 'Create movie' })
})

//Obtener  todas las peliculas
const getMovies = asyncHandler(async(req,res) => {
  res.status(200).json({ message: 'Get Movies' })
})

//Obtener una sola pelicula por su ID
const getMovie = asyncHandler(async(req, res) =>{
  res.status(200).json({ message: 'get movie' })
})

//Actualizar una pelicula
const updateMovie = asyncHandler(async(req, res) =>{
  res.status(200).json({ message: 'update movie' })
})

//Actualizar puntuacion de pelicula
const updaterateMovie = asyncHandler(async(req, res) =>{
  res.status(200).json({ message: 'update rate of a movie' })
})

//SoftDelete de una pelicula
const softDeleteMovie = asyncHandler(async(req, res) =>{
  res.status(200).json({ message: 'soft delete movie' })
})

//Borrar definitivamente una pelicula
const destroyMovie = asyncHandler(async(req, res) =>{
  res.status(200).json({ message: 'destroy movie' })
})

module.exports = {
  createMovie,
  getMovies,
  getMovie,
  updateMovie,
  updaterateMovie,
  softDeleteMovie,
  destroyMovie
}