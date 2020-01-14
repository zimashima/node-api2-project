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
    const id = req.params.id
    postDB.findById(id)
        .then( post => {
            if ( post.length === 0 ){
                res.status(404).json({ message: "The post with the specified ID does not exist." })
            } else
            {
            res.status(200).json( post[0] )
            }
        })
        .catch( error => res.status(500).json({ error: "The post information could not be retrieved." }))

})

//POST a new post
router.post("/", (req, res) => {
    if ((req.body.title === undefined) || (req.body.contents === undefined )){
        res.status(400).json({ errorMessage: "Please provide TITLE and CONTENTS for the post." })
    } else {
        postDB.insert(req.body)
            .then( newpost => res.status(201).json( newpost ))
            .catch( error => res.status(500).json({ error: "There was an error while saving the post to the database" }))
    }
})

//DELETE a post
router.delete("/:id", (req, res) => {
    const id = req.params.id
    postDB.findById(id)
        .then( post => {
            if ( post.length === 0){
                res.status(404).json({ message: "The post with the specified ID does not exist." })
            } else {
                postDB.remove(id)
                    .then( result => res.status(200).json({ message: `ID ${id} is successfully deleted`}))
                    .catch( error => res.status(500).json({ error: "The post could not be removed" }))
                }
        })
})

//PUT a post
router.put("/:id", (req, res) => {
    
})



module.exports = router;