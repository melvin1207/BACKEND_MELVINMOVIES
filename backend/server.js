const express = require('express')
const colors = require('colors')
const cors = require('cors')
const port = process.env.PORT || 5000

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({  extended: false }))

app.listen(port, () => console.log(`Servidor inciado en el puerto ${port}`))