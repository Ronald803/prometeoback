const express = require("express");
const router = require("./routes/mainRoutes");

const createApp = () => {
  const app = express();
  app.use(express.json());
  router(app);
  return app;
};

module.exports = createApp;
