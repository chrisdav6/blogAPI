const store = require("../models/store");
const crypto = require("crypto");

//postsIndex Function - GET /posts
const postIndex = (req, res, next) => {
  const posts = store.posts;
  res.render("posts/index", { posts });
};

//postsNew Function - GET /posts/new
const postNew = (req, res, next) => {
  res.render("posts/new");
};

//postsCreate Function - POST /posts
const postCreate = (req, res, next) => {
  const { name, url, text } = req.body;
  const NewPost = {
    id: crypto.randomBytes(16).toString("hex"),
    name: name,
    url: url,
    text: text,
    comments: []
  };
  store.posts.push(NewPost);
  console.log("New Post Saved!");
  res.redirect("/posts");
};

//postsEdit Function - GET /posts/:id/edit
const postEdit = (req, res, next) => {
  const id = req.params.id;
  const post = store.posts.find(post => post.id == id);
  res.render(`posts/edit`, { post });
};

//postsUpdate Function - PUT /posts/:id
const postUpdate = (req, res, next) => {
  const { name, url, text } = req.body;
  const id = req.params.id;
  const post = store.posts.find(post => post.id == id);
  const postIndex = store.posts.indexOf(post);
  let updatedPost = {
    id: post.id,
    name: name,
    url: url,
    text: text,
    comments: post.comments
  }
  store.posts[postIndex] = updatedPost;
  console.log("Post has been updated!");
  res.redirect("/posts");
};


//postsDelete Function - DELETE /posts/:id
const postDestroy = (req, res, next) => {
  const id = req.params.id;
  const post = store.posts.find(post => post.id == id);
  const postIndex = store.posts.indexOf(post);
  if (!post) return res.send("That post does not exist!");
  store.posts.splice(postIndex, 1);
  console.log("Post Deleted!");
  res.redirect("/posts");
};

module.exports = {
  postIndex,
  postNew,
  postCreate,
  postEdit,
  postUpdate,
  postDestroy
}