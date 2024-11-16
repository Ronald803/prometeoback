const user = require("../components/users/users.network");
const auth = require("../components/auth/auth.network");
const question = require("../components/questions/question.network");
const career = require("../components/careers/careers.network");
const subject = require("../components/subjects/subjects.network");

const routes = function (server) {
  server.use("/api/user", user);
  server.use("/api/auth", auth);
  server.use("/api/question", question);
  server.use("/api/career", career);
  server.use("/api/subject", subject);
  server.use("/", (req, res) => {
    res.send("hola prometeo");
  });
};

module.exports = routes;
