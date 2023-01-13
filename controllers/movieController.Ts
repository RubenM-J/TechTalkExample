import express from 'express'
const service = require('../services/movieService')

const app = express()

app.use(express.json())
