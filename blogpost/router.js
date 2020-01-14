const express = require("express")

const PostDB = require('../data/db.js')

const router = express.Router()


//GET all post
router.get("/", (req, res) => {

})


//GET a single post
router.get("/:id", (req, res) => {
    
})

//POST a new post
router.post("/", (req, res) => {
    
})

//DELETE a post
router.delete("/:id", (req, res) => {
    
})

//PUT a post
router.put("/:id", (req, res) => {
    
})



module.exports = router