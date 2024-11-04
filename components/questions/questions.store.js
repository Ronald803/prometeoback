const QuestionModel = require("./questions.model");

async function add(question) {
  const newQuestion = new QuestionModel(question);
  const questionSaved = await newQuestion.save();
  return questionSaved;
}

async function list(filter) {
  const questions = await QuestionModel.find(filter);
  return questions;
}

module.exports = { add, list };
