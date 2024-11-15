const express = require("express");
const router = express.Router();
const careerController = require("./careers.controller");
const responseFunc = require("../../helpers/responseFunc");

router.post("/", async (req, res) => {
  try {
    const response = await careerController.addCareer(req.body);
    responseFunc.success(res, "Created Successfully", response, 201);
  } catch (error) {
    responseFunc.error(res, error, 400);
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await careerController.getCareers();
    responseFunc.success(res, "Careers Found", response, 200);
  } catch (error) {
    responseFunc.error(res, error, 400);
  }
});

module.exports = router;
