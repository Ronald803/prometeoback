const express = require("express");
const router = express.Router();
const userController = require("./users.controller");
const responseFunc = require("../../helpers/responseFunc");

router.post("/", async (req, res) => {
  try {
    const response = await userController.addUser(req.body);
    responseFunc.success(res, "User registered successfully!", response, 201);
  } catch (error) {
    responseFunc.error(res, error, 400);
  }
});

module.exports = router;
