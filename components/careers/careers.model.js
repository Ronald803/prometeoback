const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const careerSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  subjects: {
    type: [String],
    default: [],
  },
});

const model = mongoose.model("Careers", careerSchema);
module.exports = model;
