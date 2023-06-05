var express = require('express');
var router = express.Router();
const Blogger = require('../model/bloggermodel');
const { getAllBloggs, newBlog, getBlog } = require("../controller/bloggercontroller")

router.get("/get-allblogs", getAllBloggs)

router.post("/new-blog", newBlog)

router.get("/get-blog/:id", getBlog)

module.exports = router;