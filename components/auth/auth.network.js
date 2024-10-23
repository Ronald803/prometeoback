const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");

router.post("/", async (req, res) => {
  try {
    const response = await authController.login(req.body);
    res.send(response);
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = router;
