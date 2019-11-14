const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  locationName: 'string',
  stationId: 'string',
  obsTime: 'date',
  weatherElement: [{ elementName: 'string', elementValue: 'string' }],
  city: 'string',
});

schema.index({ city: 1 });

module.exports = mongoose.model('weathers', schema);
