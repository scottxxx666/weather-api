const response = require('./response');
const service = require('./service');
const db = require('./db');
const listRequest = require('./requests/list-request');

db.init();

const list = async function list(event) {
  const cities = await listRequest.getCities(event.queryStringParameters);
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
