const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
  adult:{
    type: Boolean,
    required: [true, 'Por indique si es una pelicula para adultos o no']
  },
  backdrop_path:{
    type: String,
    required: [true, 'Por favor ingrese el link de la imagen de la pelicula']
  },
  original_language:{
    type: String,
    required: [true,  'Por favor indique el lengujae original de la pelicula']
  },
  original_title:{
    type:String,
    required: [true, 'Por favor ingrese el titulo de la pelicula']
  },
  overview:{
    type: String,
    required: [true, 'Por favor ingrese la descripcion de la pelicula']
  },
  popularity:{
    type: Number,
    required: [true, 'Por favor ingrese el numero de popularidad de la pelicula']
  },
  poster_path:{
    type: String,
    required: [true, 'Por favor ingrese el link de la imagen de la pelicula']
  },
  release_date:{
    type: String,
    required: [true, 'por favor ingresa la fecha de estreno de la pelicula']
  },
  title:{
    type: String,
    required: [true, 'Por favor ingresa el titulo de la pelicula1'],
  },
  vote_average:{
    type: Number,
    required: [true, 'Indica el promedio de las puntuaciones de la pelicula']
  },
  vote_count:{
    type: Number,
    required: [true, 'Indica la puntuación para la pelicula del 1 al 10']
  },
  active:{
    type: Boolean,
    default: true
  }
},{
  timestamps: true
})

module.exports = mongoose.model('Movie', movieSchema)