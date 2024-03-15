const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const cors = require('cors')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({  extended: false }))

app.use('/api/movies', require('./routes/moviesRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Servidor inciado en el puerto ${port}`))