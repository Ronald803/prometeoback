const subjectStore = require("./subjects.store");

async function addSubject(newSubject) {
  const { name, careerId } = newSubject;
  if (!name || !careerId) {
    throw new Error("Incomplete Data");
  }
  const subjectSaved = await subjectStore.add({ name, careerId });
  return { subjectId: subjectSaved._id };
}

async function getSubjects(filter) {
  const subjects = await subjectStore.list(filter);
  return subjects;
}

module.exports = {
  addSubject,
  getSubjects,
};
