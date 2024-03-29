const cwb = require('./repositories/cwbRepository');
const weather = require('./repositories/weatherRepository');
const { availableCities } = require('./config');

function toWeather({
  locationName, stationId, weatherElement, time: { obsTime }, parameter,
}) {
  return {
    locationName,
    stationId,
    weatherElement,
    obsTime: new Date(obsTime),
    city: parameter[0].parameterValue,
  };
}

const list = async function list(cities) {
  if (cities.length === 0) {
    return weather.all();
  }
  return weather.list(cities);
};

const update = async function update() {
  const data = await cwb.listWeather(availableCities);
  const promises = data.map(toWeather).map((e) => weather.updateOrCreate(e.stationId, e));
  return Promise.all(promises);
};

module.exports = { list, update };
