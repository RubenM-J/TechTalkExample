import express from 'express'
const service = require('../services/movieService')

const app = express()

app.use(express.json())

module.exports.getAllMovies = async function(req: any, res: { json: (arg0: any) => void }, next: any){
    const result = await service.getAllMovies();
    res.json(result);
    next();
}