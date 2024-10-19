const db = require("mongoose");

db.Promise = global.Promise;

async function connectDB(url) {
  await db
    .connect(url)
    .then(() => console.log("[db] Successfully connected"))
    .catch((e) => console.log("[db] ", e));
}

module.exports = connectDB;
