const userStore = require("./users.store");
const bcryptjs = require("bcryptjs");

async function addUser(newUser) {
  const { name, cellphone, email, password } = newUser;
  if (!name || !cellphone || !email || !password) {
    throw new Error("Incomplete Data");
  }
  const salt = bcryptjs.genSaltSync();
  const encryptPassword = bcryptjs.hashSync(password, salt);
  const user = { name, cellphone, email, password: encryptPassword };
  const userSaved = await userStore.add(user);
  return { _id: userSaved._id };
}

module.exports = {
  addUser,
};
