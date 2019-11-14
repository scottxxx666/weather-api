const response = require('./utils/response');

const list = async function list(event) {
  return response({
    statusCode: 200,
    body: 'Hello!',
  });
};

module.exports = { list };
