import express from 'express'
const service = require('../services/actorService')

const app = express()

app.use(express.json())

module.exports.getAllActors = async function(req: any, res: any, next: any){
    //Complete this function
}

module.exports.createActor = async function(req: any, res: any, next: any){
    //Complete this function
}

module.exports.getActorById = async function (req: any, res: any, next: any) {
    //Complete this function
}