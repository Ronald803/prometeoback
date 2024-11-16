const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const topicSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  bookName: {
    type: String,
    default: null,
  },
  page: {
    type: Number,
    default: null,
  },
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subjects",
  },
});

const model = mongoose.model("Topics", topicSchema);
module.exports = model;
