const express = require('express');
const router = express.Router();
const { getPosts, createPost } = require('../controllers/posts.js');
//localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);

module.exports = router;
