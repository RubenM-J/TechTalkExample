import express from 'express'
const service = require('../services/movieService')

const app = express()

app.use(express.json())

module.exports.getAllMovies = async function(req: any, res: any, next: any){
    
}

module.exports.createMovie = async function(req: any, res: any, next: any){
    
}

module.exports.getMovieById = async function (req: any, res: any, next: any) {
    
}

module.exports.addActorToMovie = async function (req: any, res: any, next: any) {
    
}

module.exports.AmountOfMoviesInGenre = async function (req: any, res: any, next: any) {
    
}