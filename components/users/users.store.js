const UserModel = require("./users.model");

async function add(user) {
  const newUser = new UserModel(user);
  const userSaved = await newUser.save();
  return userSaved;
}

module.exports = { add };
