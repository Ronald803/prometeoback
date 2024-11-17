const QuestionModel = require("./questions.model");

async function add(question) {
  const newQuestion = new QuestionModel(question);
  const questionSaved = await newQuestion.save();
  return questionSaved;
}

async function list(filter) {
  const questions = await QuestionModel.find(filter).populate({
    path: "topicId",
    populate: {
      path: "subjectId",
      populate: {
        path: "careerId",
      },
    },
  });
  return questions;
}

module.exports = { add, list };
