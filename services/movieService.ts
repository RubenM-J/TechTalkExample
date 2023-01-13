import express from 'express'
import { Genre, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

module.exports.getAllMovies = async function(){
}

module.exports.createMovieAsync = async function(title: string, publisher: string, genre: Genre, releaseDate: Date) {

}

module.exports.getMovieById = async function(movieId: string) {
    
}

module.exports.addActorToMovie = async function(movieId: string, actorId: string) {
    
}
