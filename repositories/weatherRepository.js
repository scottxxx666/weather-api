const Weather = require('../model');

const updateOrCreate = async function updateOrCreate(stationId, document) {
  return Weather.replaceOne({ stationId }, document, { upsert: true });
};

module.exports = { updateOrCreate };
