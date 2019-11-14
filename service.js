const cwb = require('./repositories/cwbRepository');

const update = async function update() {
  const weathers = await cwb.listWeather(['臺北市', '新北市', '桃園市']);
};

module.exports = { update };
