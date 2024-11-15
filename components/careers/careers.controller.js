const careersStore = require("./careers.store");

async function addCareer(newCareer) {
  const { name } = newCareer;
  if (!name) {
    throw new Error("Incomplete Data");
  }
  const careerSaved = await careersStore.add({ name });
  return { careerId: careerSaved._id };
}

async function getCareers(filter) {
  const careers = await careersStore.list(filter);
  return careers;
}

module.exports = {
  addCareer,
  getCareers,
};
