const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const answerSchema = new Schema({
  answer: {
    type: String,
    required: [true, "Answer is required"],
  },
  justification: {
    type: String,
    required: [true, "Justification is required"],
  },
});

const questionSchema = new Schema({
  question: {
    type: String,
    required: [true, "Question is required"],
  },
  correctAnswer: answerSchema,
  incorrectAnswers: [answerSchema],
  subject: {
    type: String,
    required: [true, "Subject is required"],
  },
  topic: {
    type: String,
    required: [true, "Topic is required"],
  },
});

const model = mongoose.model("Questions", questionSchema);
module.exports = model;
