//Comments.js in routes

const express = require('express');
const {Comments}  = require('../models'); 
const {validateToken} = require('../middlewares/AuthMiddleware')
const router = express.Router();

router.get('/:postId', async (req,res) => {
    const postId = req.params.postId;
    const post = await Comments.findAll({where : { postId: postId}});
    res.json(post);
})

router.post('/',validateToken, async (req,res) => {
    const comment = req.body;
    const username = req.user.username;
    comment.username = username;
    await Comments.create(comment);
    res.json(comment);
})

module.exports = router;