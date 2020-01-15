const express = require("express")
const cors = require("cors")

const blogpostRouter = require("../blogpost/blogpost-router.js")
const commentsRouter = require("../comments/comments-router.js")

const server = express()
server.use(express.json());
server.use(cors())

server.get("/", (req,res) => {
    res.send(`<h1> Hello from GET "/" endpoint! </h1>`)
})

server.use("/api/posts", blogpostRouter)
server.use("/api/posts", commentsRouter)

module.exports = server;