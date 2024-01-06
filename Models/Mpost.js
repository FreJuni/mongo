const mongodb = require("mongodb");
const { getDatabase } = require("../util/database");

const Post = class {
  constructor(title, description, image, id) {
    this.title = title;
    this.description = description;
    this.image = image;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }
  createPost() {
    const db = getDatabase();
    let tempDb;
    if (this._id) {
      tempDb = db
        .collection("posts")
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      tempDb = db.collection("posts").insertOne(this);
    }
    return tempDb
      .then((resultr) => {
        console.log("Helo from result", resultr);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static getPosts() {
    const db = getDatabase();
    return db
      .collection("posts")
      .find()
      .toArray()
      .then()
      .catch((err) => {
        console.log(err);
      });
  }
  static postDetail(id) {
    const db = getDatabase();
    return db
      .collection("posts")
      .find({ _id: new mongodb.ObjectId(id) })
      .toArray()
      .then()
      .catch((err) => {
        console.log(err);
      });
  }
  static oldPost(id) {
    const db = getDatabase();
    return db
      .collection("posts")
      .findOne({ _id: new mongodb.ObjectId(id) })
      .then()
      .catch((err) => {
        console.log(err);
      });
  }
  static deletePost(id) {
    const db = getDatabase();
    return db
      .collection("posts")
      .deleteOne({ _id: new mongodb.ObjectId(id) })
      .then()
      .catch((err) => {
        console.log(err);
      });
  }
};

module.exports = Post;
