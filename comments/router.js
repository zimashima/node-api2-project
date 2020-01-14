
//comments /api/posts/:id/comments

const express = require("express")

const PostDB = require('../data/db.js')

const router = express.Router()

//GET a single post's comments
router.get("/", (req, res) => {
    
})

//POST a single post's comment
router.post("/", (req, res) => {
    
})

module.exports = router;