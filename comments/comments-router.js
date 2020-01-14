
//comments /api/posts/:id/comments

const express = require("express")

const PostDB = require('../data/db.js')

const router = express.Router()

//GET a single post's comments
router.get("/:postId/comments", (req, res) => {
    const postId = req.params.postId
    PostDB.findById(postId)
        .then( post => {
            if ( post.length === 0 ){
                res.status(404).json({ message: "The post with the specified ID does not exist." })
            } else {
                PostDB.findPostComments(postId)
                    .then( comments => {
                        res.status(200).json(comments)
                    })
                    .catch( error => res.status(500).json({ error: "The comments information could not be retrieved." }))
            }
        })
        .catch( error => res.status(500).json({ error: "The information regarding this post could not be retrieved." }))
})

//POST a single post's comment
router.post("/:postId/comments", (req, res) => {
    const postId = req.params.postId
    PostDB.findById(postId)
        .then( post => {
            if ( post.length === 0 ){
                res.status(404).json({ message: "The post with the specified ID does not exist." })
            } else if (req.body.text === undefined) {
                res.status(400).json({ errorMessage: "Please provide text for the comment." })
            } else {
                PostDB.insertComment({ "text": req.body.text, "post_id": parseInt(postId) })
                    .then( result => res.status(201).json(result))
                    .catch( error => res.status(500).json({ error: "There was an error while saving the comment to the database" }))
            }
        })
})

module.exports = router;