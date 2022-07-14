const express = require('express');
const getBlogs = require('../../controllers/blogs/blogs.get');
const getBlog = require('../../controllers/blogs/blog.get');
const createBlogs = require('../../controllers/blogs/blog.create');
const deleteBlogs = require('../../controllers/blogs/blog.delete');
const editBlogs = require('../../controllers/blogs/blog.edit');
const router = express.Router();

//routes
//get all blogs
router.get('/', getBlogs);

//create a new blog
router.put('/', createBlogs);

//get a given blog
router.get('/:blogId', getBlog);

//delete a blog
router.delete('/:blogId', deleteBlogs);

//edit a blog
router.patch('/:blogId', editBlogs);

module.exports = router;