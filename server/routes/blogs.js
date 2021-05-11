const express = require('express');
const blogController = require('../controllers/blogs');

const router = express.Router();

router.route('/blogs')
	.get(blogController.blogGetMany)
	.post(blogController.blogCreate)

router.route('/blog/:id')
	.get(blogController.blogGet)
	.put(blogController.blogUpdate)
	.delete(blogController.blogDelete)

module.exports = router;