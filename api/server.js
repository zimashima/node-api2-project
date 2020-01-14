const express = require("express")

const blogpostRouter = require("../blogpost/blogpost-router.js")
const commentsRouter = require("../comments/comments-router.js")

const server = express()
server.use(express.json());

server.get("/", (req,res) => {
    res.send(`<h1> Hello from GET "/" endpoint! </h1>`)
})

server.use("/api/posts", blogpostRouter)
server.use("/api/posts", commentsRouter)

module.exports = server;