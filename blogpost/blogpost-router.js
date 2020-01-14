const express = require("express")

const postDB = require('../data/db.js')

const router = express.Router()


//GET all post
router.get("/", (req, res) => {
    postDB.find()
        .then( posts => { 
            console.log(posts)
            res.status(200).json(posts) 
        })
        .catch( error => res.status(500).json({ error: "The posts information could not be retrieved." }))
})


//GET a single post
router.get("/:id", (req, res) => {
    const id = req.param.id
    postDB.findById(id)

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



module.exports = router;