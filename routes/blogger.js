var express = require('express');
var router = express.Router();
const Blogger = require('../model/bloggermodel');
const { getAllBloggs, newBlog, getBlog, updateBlog, deleteBlog } = require("../controller/bloggercontroller")

router.get("/get-allblogs", getAllBloggs)

router.post("/new-blog", newBlog)

router.get("/get-blog/:id", getBlog)

router.put("/update-blog/:id", updateBlog)

router.delete("/delete-blog/:id", deleteBlog)

module.exports = router;