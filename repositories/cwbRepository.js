const axios = require('axios');

function isTarget(cities) {
  return (e) => cities.includes(e.parameter[0].parameterValue);
}

const listWeather = async function getRealtimeWeather(cities) {
  const res = await axios.get(process.env.CWB_URL, {
    params: {
      Authorization: process.env.CWB_TOKEN,
      parameterName: 'CITY',
    },
  });
  return res.data.records.location.filter(isTarget(cities));
};

module.exports = { listWeather };
