var express = require('express');
var router = express.Router();

const Author = require ("../model/authormodel")
const { getAllAuthors, getAuthorid, newAuthor, updateAuthor, deleteAuthor } = require("../controller/authorcontroller")

router.get("/get-allauthors", getAllAuthors)

router.post("/new-author", newAuthor)

router.get("/get-author/:id", getAuthorid)

router.put("/update-author/:id", updateAuthor)

router.delete("/delete-author/:id", deleteAuthor)


module.exports = router;