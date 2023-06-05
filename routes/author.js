var express = require('express');
var router = express.Router();

const Author = require ("../model/authormodel")
const { getAllAuthors, getAuthorid, newAuthor } = require("../controller/authorcontroller")

router.get("/get-allauthors", getAllAuthors)

router.post("/new-author", newAuthor)

router.get("/get-author/:id", getAuthorid)


module.exports = router;