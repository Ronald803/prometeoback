const express = require("express");
const router = express.Router();
const questionController = require("./questions.controller");
const responseFunc = require("../../helpers/responseFunc");

router.post("/", async (req, res) => {
  try {
    const response = await questionController.addQuestion(req.body);
    responseFunc.success(res, "Created Successfully", response, 201);
  } catch (error) {
    responseFunc.error(res, error, 400);
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await questionController.getQuestions();
    responseFunc.success(res, "Questions Found", response, 200);
  } catch (error) {
    response.error(res, error, 400);
  }
});

module.exports = router;
