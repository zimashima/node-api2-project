
//comments /api/posts/:id/comments

const express = require("express")

const PostDB = require('../data/db.js')

const router = express.Router()

//GET a single post's comments
router.get("/:postId/comments", async (req, res) => {

    const postId = req.params.postId
    const post = await PostDB.findById(postId)
        
    if ( post.length === 0 ){
        res.status(404).json({ message: "The post with the specified ID does not exist." })
    } else {
        try {
            const comments = await PostDB.findPostComments(postId)
            await res.status(200).json(comments)
        }
        catch{
            await res.status(500).json({ error: "The comments information could not be retrieved." })
        }
    }

})

//POST a single post's comment
router.post("/:postId/comments", async (req, res) => {

    const postId = req.params.postId
    const post = await PostDB.findById(postId)
        
    if ( post.length === 0 ){
        res.status(404).json({ message: "The post with the specified ID does not exist." })
    } else if (req.body.text === undefined) {
    res.status(400).json({ errorMessage: "Please provide text for the comment." })
    } else {
        try {
            const result = await PostDB.insertComment({ "text": req.body.text, "post_id": parseInt(postId) })
            const newComment = await PostDB.findCommentById(result.id)
            await res.status(201).json(newComment)
        }
        catch{
            await res.status(500).json({ error: "There was an error while saving the comment to the database" })
        }
    }

})
module.exports = router;