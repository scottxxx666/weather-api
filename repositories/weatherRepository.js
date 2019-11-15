const Weather = require('../model');

const all = async function all() {
  return Weather.find({});
};

const list = async function list(cities) {
  return Weather.find({ city: { $in: cities } });
};

const updateOrCreate = async function updateOrCreate(stationId, document) {
  return Weather.replaceOne({ stationId }, document, { upsert: true });
};

module.exports = { all, list, updateOrCreate };
