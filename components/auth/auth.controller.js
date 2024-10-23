const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const usersStore = require("../users/users.store");

async function login({ email, password }) {
  if (!email || !password) {
    throw new Error("Incomplete Data");
  }
  const user = await usersStore.list({ email });
  if (user.length < 1) {
    throw new Error("Wrong information");
  }
  const validPassword = bcryptjs.compareSync(password, user[0].password);
  if (!validPassword) {
    throw new Error("Wrong information");
  }
  const payload = { uid: user[0]._id };
  const token = jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
    expiresIn: "4h",
  });
  return { name: user[0].name, token };
}

module.exports = { login };
