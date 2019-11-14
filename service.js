const axios = require('axios');

function isTarget(cities) {
  return (e) => cities.includes(e.parameter[0].parameterValue);
}

const update = async function update() {
  const res = await axios.get(process.env.CWB_URL, {
    params: {
      Authorization: process.env.CWB_TOKEN,
      parameterName: 'CITY',
    },
  });
  const cities = ['臺北市', '新北市', '桃園市'];
  const data = res.data.records.location.filter(isTarget(cities));
};

module.exports = { update };
