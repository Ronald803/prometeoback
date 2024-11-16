const topicStore = require("./topics.store");

async function addTopic(newTopic) {
  const { name, subjectId } = newTopic;
  if (!name || !subjectId) {
    throw new Error("Incomplete Data");
  }
  const topicSaved = await topicStore.add(newTopic);
  return { topicId: topicSaved._id };
}

async function getTopics(filter) {
  const topics = await topicStore.list(filter);
  return topics;
}

module.exports = {
  addTopic,
  getTopics,
};
