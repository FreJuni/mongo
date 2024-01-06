const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let db;

const conneter = () => {
  MongoClient.connect(process.env.MONGO_URL)
    .then((result) => {
      console.log("connected to mongodb");
      db = result.db(); // it will assign with collection name
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDatabase = () => {
  if (db) {
    return db;
  }
  throw "No Database";
};

module.exports = { conneter, getDatabase };
