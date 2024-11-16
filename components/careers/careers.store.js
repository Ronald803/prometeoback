const CareerModel = require("./careers.model");

async function add(career) {
  const newCareer = new CareerModel(career);
  const careerSaved = await newCareer.save();
  return careerSaved;
}

async function list(filter) {
  const careers = await CareerModel.find(filter).populate("subjects");
  return careers;
}

module.exports = { add, list };
