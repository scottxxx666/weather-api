const response = require('./response');
const service = require('./service');
const db = require('./db');

db.init();

const list = async function list(event) {
  return response({
    statusCode: 200,
    body: 'Hello!',
  });
};

const update = async function saveOrUpdate() {
  await service.update();
};

module.exports = { list, update };
