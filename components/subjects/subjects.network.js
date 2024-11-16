const express = require("express");
const router = express.Router();
const subjectController = require("./subjects.controller");
const responseFunc = require("../../helpers/responseFunc");

router.post("/", async (req, res) => {
  try {
    const response = await subjectController.addSubject(req.body);
    responseFunc.success(res, "Created Successfully", response, 201);
  } catch (error) {
    responseFunc.error(res, error, 400);
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await subjectController.getSubjects();
    responseFunc.success(res, "Subjects Found", response, 200);
  } catch (error) {
    responseFunc.error(res, error, 400);
  }
});

module.exports = router;
