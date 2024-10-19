const express = require("express");
const router = require("./routes/mainRoutes");
const config = require("./config");
const connectDB = require("./db");

const createApp = () => {
  const app = express();
  connectDB(config.dbUrl);
  app.use(express.json());
  router(app);
  return app;
};

module.exports = createApp;
