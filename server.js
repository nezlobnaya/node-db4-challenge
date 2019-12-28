const express = require('express')
const helmet = require('helmet')

const RecipesRouter = require('./routes/recipes-router')

const server = express()

server.use(helmet())
server.use(express.json())
server.use('/api/recipes', RecipesRouter)

server.get('/', (req, res) => {
    const messageOfTheDay = process.env.MOTD
    res.send(`<h2>${messageOfTheDay}</h2>`)
})

server.use((err, req, res, next) => {
    res.status(500).json({
        message: "Bad mistake, Engineer!", err
    })
})

module.exports = server