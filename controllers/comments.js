const store = require("../models/store");
const crypto = require("crypto");

//commentsNew Function - GET /posts/:id/comments/new
const commentNew = (req, res, next) => {
  const id = req.params.id;
  const post = store.posts.find(post => post.id == id);
  res.render("comments/new", { post });
};

//commentsCreate Function - POST /posts/:id/comments
const commentCreate = (req, res, next) => {
  const id = req.params.id;
  const post = store.posts.find(post => post.id == id);
  const postIndex = store.posts.indexOf(post);
  const { text } = req.body;
  store.posts[postIndex].comments.push({
    commentId: crypto.randomBytes(16).toString("hex"),
    text: text
  });
  console.log("New Comment Saved!");
  res.redirect("/posts");
};

//commentsEdit Function - GET /posts/:id/comments/:commentId/edit
const commentEdit = (req, res, next) => {
  const id = req.params.id;
  const commentId = req.params.commentId;
  const post = store.posts.find(post => post.id == id);
  const postIndex = store.posts.indexOf(post);
  const comment = store.posts[postIndex].comments.find(comment => comment.commentId == commentId);
  res.render("comments/edit", { post, comment });
};

//commentsUpdate Function - PUT /posts/:id/comments/:commentId
const commentUpdate = (req, res, next) => {
  const { text } = req.body;
  const id = req.params.id;
  const commentId = req.params.commentId;
  const post = store.posts.find(post => post.id == id);
  const postIndex = store.posts.indexOf(post);
  const comment = store.posts[postIndex].comments.find(comment => comment.commentId == commentId);
  const commentIndex = store.posts[postIndex].comments.indexOf(comment);
  let updatedComment = {
    commentId: commentId,
    text: text
  }
  store.posts[postIndex].comments[commentIndex] = updatedComment;
  console.log("Comment Updated!");
  res.redirect("/posts");
};

//commentsDelete Function - DELETE /comments/:id
const commentDestroy = (req, res, next) => {
  const id = req.params.id;
  const commentId = req.params.commentId;
  const post = store.posts.find(post => post.id == id);
  const postIndex = store.posts.indexOf(post);
  const comment = store.posts[postIndex].comments.find(comment => comment.commentId == commentId);
  const commentIndex = store.posts[postIndex].comments.indexOf(comment);
  store.posts[postIndex].comments.splice(commentIndex, 1);
  console.log("Comment Deleted!");
  res.redirect("/posts");
};

module.exports = {
  commentNew,
  commentCreate,
  commentEdit,
  commentUpdate,
  commentDestroy
}