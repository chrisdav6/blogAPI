const path = require("path");
const express = require("express");
const logger = require("morgan");
const methodOverride = require('method-override');
const port = process.env.PORT || 3000;

//Require Routes
const indexRouter = require("./routes/index");
const postsRouter = require("./routes/posts");
const commentsRouter = require("./routes/comments");

const app = express();

//Use EJS
app.set("view engine", "ejs");

//Use Morgan Logger
app.use(logger('dev'));

//Setup BodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Set Static Public Folder
app.use(express.static(path.join(__dirname, "public")));

// Use Method Override
app.use(methodOverride('_method'));

//Mount Routes
app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/posts/:id/comments', commentsRouter);

//Start Server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});