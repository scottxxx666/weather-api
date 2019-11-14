const list = async function (event) {
  return response({
    statusCode: 200,
    body: 'Hello!',
  });
};

const get = async function (event) {
  return response({
    statusCode: 200,
    body: 'Hello!',
  });
};

const response = async function (res) {
  return {
    ...res,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  };
};

module.exports = { list, get };