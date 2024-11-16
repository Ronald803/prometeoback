const express = require("express");
const router = express.Router();
const topicController = require("./topic.controller");
const responseFunc = require("../../helpers/responseFunc");

router.post("/", async (req, res) => {
  try {
    const response = await topicController.addTopic(req.body);
    responseFunc.success(res, "Created Successfully", response, 201);
  } catch (error) {
    responseFunc.error(res, error, 400);
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await topicController.getTopics();
    responseFunc.success(res, "Careers Found", response, 200);
  } catch (error) {
    responseFunc.error(res, error, 400);
  }
});

module.exports = router;
