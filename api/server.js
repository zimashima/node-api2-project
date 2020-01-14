const express = require("express")

const server = express()

const blogpostRouter = require("../blogpost/router.js")
const commentsRouter = require("../comments/router.js")

server.get("/", (req,res) => {
    res.send("<h1>Good Job! You get it up and running!</h1>")
})

server.use("api/posts", blogpostRouter)
server.use("api/posts/:id/comments", commentsRouter)

module.exports = server;