const store = require("../models/store");

//commentsNew Function - GET /posts/:id/comments/new
const commentNew = (req, res, next) => {
  let id = req.params.id;
  const post = store.posts.find(post => post.id == id);
  res.render("comments/new", { post });
};

//commentsCreate Function - POST /posts/:id/comments
const commentCreate = (req, res, next) => {
  let id = req.params.id;
  const post = store.posts.find(post => post.id == id);
  const { text } = req.body;
  store.posts[post.id].comments.push({
    commentId: store.posts[post.id].comments.length,
    text: text
  });
  console.log("New Comment Saved!");
  res.redirect("/posts");
};

//commentsEdit Function - GET /posts/:id/comments/:commentId/edit
const commentEdit = (req, res, next) => {
  let id = req.params.id;
  let commentId = req.params.commentId;
  const post = store.posts.find(post => post.id == id);
  const comment = post.comments[commentId];
  res.render("comments/edit", { post, comment });
};

//commentsUpdate Function - PUT /posts/:id/comments/:commentId
const commentUpdate = (req, res, next) => {
  let { text } = req.body;
  let id = req.params.id;
  let commentId = req.params.commentId;
  const post = store.posts.find(post => post.id == id);
  post.comments[commentId].text = text;
  console.log("Comment Updated!");
  res.redirect("/posts");
};

//commentsDelete Function - DELETE /comments/:id
const commentDestroy = (req, res, next) => {
  let id = req.params.id;
  let commentId = req.params.commentId;
  const post = store.posts.find(post => post.id == id);
  post.comments.splice(commentId, 1);
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