const routes = function (server) {
  server.use("/", (req, res) => {
    res.send("hola prometeo");
  });
};

module.exports = routes;
