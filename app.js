const express = require("express");
const cors = require("cors");
const router = require("./routes/mainRoutes");
const config = require("./config");
const connectDB = require("./db");

const createApp = () => {
  const app = express();
  connectDB(config.dbUrl);
  app.use(cors());
  app.use(express.json());
  router(app);
  return app;
};

module.exports = createApp;
