const express = require('express');
const router = express.Router({ mergeParams: true });
const { commentNew, commentCreate, commentEdit, commentUpdate, commentDestroy } = require("../controllers/comments");

//GET /posts/:id/comments/new
router.get("/new", commentNew);

//POST /posts/:id/comments
router.post("/", commentCreate);

//GET /posts/:id/comments/:commentId/edit
router.get("/:commentId/edit", commentEdit);

//PUT /posts/:id/comments/:commentId
router.put("/:commentId", commentUpdate);

//DELETE /posts/:id/comments/:commentId
router.delete("/:commentId", commentDestroy);

module.exports = router;