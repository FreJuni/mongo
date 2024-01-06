const Post = require("../Models/Mpost");

exports.getPosts = (req, res) => {
  Post.getPosts()
    .then((post) => {
      res.render("home", { title: "Home Pages", postArr: post });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createPost = (req, res) => {
  const { title, description, image } = req.body;
  const post = new Post(title, description, image);
  post
    .createPost()
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.renderPostForm = (req, res) => {
  res.render("postForm", { title: "Post Form" });
};

exports.postDetail = (req, res) => {
  const id = req.params.id;
  Post.postDetail(id)
    .then(([result]) => {
      res.render("postDetail", { title: "Post Detail", post: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deletePost = (req, res) => {
  const id = req.params.id;
  Post.deletePost(id)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(id);
    });
};

exports.getOldPost = (req, res) => {
  const id = req.params.id;
  Post.oldPost(id)
    .then((result) => {
      res.render("editPost", { title: "Edit Post", post: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updatedPost = (req, res) => {
  const { title, description, image, id } = req.body;
  const post = new Post(title, description, image, id);
  post
    .createPost()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
