const cwb = require('./repositories/cwbRepository');
const weather = require('./repositories/weatherRepository');

function toWeather({
  locationName, stationId, weatherElement, time: obsTime, parameter,
}) {
  return {
    locationName,
    stationId,
    weatherElement,
    obsTime,
    city: parameter[0].parameterValue,
  };
}

const update = async function update() {
  const data = await cwb.listWeather(['臺北市', '新北市', '桃園市']);
  data.map(toWeather).forEach((e) => weather.updateOrCreate(e.stationId, e));
};

module.exports = { update };
