const Weather = require('../model');

const list = async function list() {
  return Weather.find({});
};

const updateOrCreate = async function updateOrCreate(stationId, document) {
  return Weather.replaceOne({ stationId }, document, { upsert: true });
};

module.exports = { list, updateOrCreate };
