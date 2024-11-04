const questionStore = require("./questions.store");

async function addQuestion(newQuestion) {
  const {
    question: query,
    correctAnswer,
    incorrectAnswers,
    subject,
    topic,
  } = newQuestion;
  if (!query || !correctAnswer || !incorrectAnswers || !subject || !topic) {
    throw new Error("Incomplete Data");
  }
  const question = {
    question: query,
    correctAnswer,
    incorrectAnswers,
    subject,
    topic,
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
