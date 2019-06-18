const MongoClient = require("mongodb").MongoClient;
const myConfig = require("config");

class MongoDB {
  constructor() {
    const config = myConfig.get("Config");
    MongoClient.connect(config.mongodbUrl, (err, db) => {
      if (err) {
        console.log(err);
      } else {
        this.mongodb = db;
      }
    });
  }
}
var mongoDB = new MongoDB();

module.exports = mongoDB;
