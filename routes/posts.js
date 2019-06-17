const express = require('express');
const router = express.Router();
const { postIndex, postNew, postCreate, postEdit, postUpdate, postDestroy } = require("../controllers/posts");

//GET /posts
router.get("/", postIndex);

//GET /posts/new
router.get("/new", postNew);

//POST /posts
router.post("/", postCreate);

//GET /posts/:id/edit
router.get("/:id/edit", postEdit);

//PUT /posts/:id
router.put("/:id", postUpdate);

//DELETE /posts/:id
router.delete("/:id", postDestroy);

module.exports = router;