const response = require('./response');
const service = require('./service');
const db = require('./db');
const listRequest = require('./requests/list-request');
const errorHandler = require('./error-handler');

db.init();

const list = errorHandler(async (event) => {
  const cities = await listRequest.getCities(event.queryStringParameters);
  const data = await service.list(cities);
  return response({
    statusCode: 200,
    body: JSON.stringify({ data }),
  });
});

const update = errorHandler(async () => {
  await service.update();
});

module.exports = { list, update };
