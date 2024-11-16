const TopicModel = require("./topics.model");

async function add(topic) {
  const newTopic = new TopicModel(topic);
  const topicSaved = newTopic.save();
  return topicSaved;
}

async function list(filter) {
  const topics = await TopicModel.find(filter).populate({
    path: "subjectId",
    populate: { path: "careerId" },
  });
  return topics;
}

module.exports = { add, list };
