const user = require("../components/users/users.network");

const routes = function (server) {
  server.use("/api/user", user);
  server.use("/", (req, res) => {
    res.send("hola prometeo");
  });
};

module.exports = routes;
