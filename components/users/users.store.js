const UserModel = require("./users.model");

async function add(user) {
  const newUser = new UserModel(user);
  const userSaved = await newUser.save();
  return userSaved;
}

async function list(filter) {
  const users = await UserModel.find(filter);
  return users;
}

module.exports = { add, list };
