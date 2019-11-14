const cwb = require('./repositories/cwbRepository');
const weather = require('./repositories/weatherRepository');

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

const list = async function list() {
  return weather.list();
};

const update = async function update() {
  const data = await cwb.listWeather(['臺北市', '新北市', '桃園市']);
  const promises = data.map(toWeather).map((e) => weather.updateOrCreate(e.stationId, e));
  return Promise.all(promises);
};

module.exports = { list, update };
