const { ValidationError } = require('@hapi/joi/lib/errors');
const response = require('./response');

module.exports = (fn) => (...args) => fn(...args).catch((e) => {
  console.log(e);
  let statusCode = 500;
  if (e instanceof ValidationError) {
    statusCode = 422;
  }
  return response({ statusCode: e.code || statusCode, body: JSON.stringify({ message: e.message }) });
});
