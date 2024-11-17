const questionStore = require("./questions.store");

async function addQuestion(newQuestion) {
  const {
    question: query,
    correctAnswer,
    incorrectAnswers,
    topicId,
  } = newQuestion;
  if (!query || !correctAnswer || !incorrectAnswers || !topicId) {
    throw new Error("Incomplete Data");
  }
  const question = {
    question: query,
    correctAnswer,
    incorrectAnswers,
    topicId,
  };
  const questionSaved = await questionStore.add(question);
  return { questionId: questionSaved._id };
}

async function getQuestions(filter) {
  const questions = await questionStore.list(filter);
  return questions;
}

module.exports = {
  addQuestion,
  getQuestions,
};
