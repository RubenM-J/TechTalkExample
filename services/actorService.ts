import express from 'express'
import { Genre, PrismaClient } from '@prisma/PrismaClient'
import { faTruckMonster } from '@fortawesome/free-solid-svg-icons'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

module.exports.getAllActors = async function(){
    //Complete this function
}

module.exports.createActorAsync = async function(name: string, email: string) {
    //Complete this function
}

module.exports.getActorById = async function(actorId: string) {
    //Complete this function
}
