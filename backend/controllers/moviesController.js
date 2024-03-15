const asyncHandler = require('express-async-handler')
const Movie = require('../models/moviesModel')

//Crear una pelicula
const createMovie = asyncHandler(async(req, res) => {
  //Se destructura el body de la petición
  const { adult, backdrop_path, original_language, original_title, overview, popularity, poster_path, release_year, title } = req.body

  //Se verifica que la petición tenga todos los datos necesarios
  if(!adult || !backdrop_path || !original_language || !original_title || !overview || !popularity || !poster_path || !release_year || !title){
    res.status(400)
    throw new Error('Faltan datos')
  }
  
  //Se verifica que el titulo ingresado sea unico
  const movieExist = await Movie.findOne({ title })
  if (movieExist){
    res.status(400)
    throw new Error('La pelicula ya existe')
  }
  
  //Objeto para crear la pelicula
  const movie = await Movie.create({
    adult, 
    backdrop_path, 
    original_language, 
    original_title, 
    overview, 
    popularity, 
    poster_path, 
    release_year, 
    title, 
    vote_average: 0, 
    vote_count: 0
  }) 
  
  if(movie){
    res.status(201).json({
    _id: movie._id,
    adult: movie.adult, 
    backdrop_path: movie.backdrop_path, 
    original_language: movie.original_language, 
    original_title: movie.original_title, 
    overview: movie.overview, 
    popularity: movie.popularity, 
    poster_path: movie.poster_path, 
    release_year: movie.release_year, 
    title: movie.title, 
    vote_average: movie.vote_average, 
    vote_count: movie.vote_count
    })
  } else{
    res.status(400)
    throw new Error('No se pudieron guardar los datos')
  }
})

//Obtener  todas las peliculas
const getMovies = asyncHandler(async(req,res) => {
  res.status(200).json({ message: 'Get Movies' })
})

//Obtener una sola pelicula por su ID
const getMovie = asyncHandler(async(req, res) =>{
  const movie = await Movie.findById(req.params.id)
  res.status(200).json(movie)
})

//Actualizar una pelicula
const updateMovie = asyncHandler(async(req, res) =>{
  const movie = await Movie.findById(req.params.id)

  if(!movie){
    res.status(400)
    throw new Error("La película no existe")
  } else{
    const movieUpdated = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(movieUpdated)
  }
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