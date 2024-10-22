const express = require("express");
const router = express.Router();
const userController = require("./users.controller");

router.post("/", async (req, res) => {
  try {
    const response = await userController.addUser(req.body);
    res.send(response);
  } catch (error) {
    res.send(e);
  }
});

module.exports = router;
