const response = require('./response');
const service = require('./service');
const db = require('./db');

db.init();

const list = async function list(event) {
  const { cities = null } = event.queryStringParameters || {};
  const data = await service.list(cities);
  return response({
    statusCode: 200,
    body: JSON.stringify({ data }),
  });
};

const update = async function saveOrUpdate() {
  await service.update();
};

module.exports = { list, update };
