require('dotenv').config()
const express = require('express')
const {PORT_NUMBER} = process.env

const app = express()

app.get('/')

app.listen(PORT_NUMBER, () => console.log(`Listening on port ${PORT_NUMBER}`))