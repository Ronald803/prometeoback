const SubjectModel = require("./subjects.model");
const CareerModel = require("../careers/careers.model");

async function add(subject) {
  const newSubject = new SubjectModel(subject);
  const subjectSaved = await newSubject.save();
  await CareerModel.findByIdAndUpdate(subject.careerId, {
    $push: { subjects: subjectSaved._id },
  });
  return subjectSaved;
}

async function list(filter) {
  const subjects = await SubjectModel.find(filter).populate("careerId");
  return subjects;
}

module.exports = { add, list };
