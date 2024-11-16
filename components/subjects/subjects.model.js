const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  careerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Careers",
  },
});

const model = mongoose.model("Subjects", subjectSchema);
module.exports = model;
