const list = async function (event) {
  return {
    statusCode: 200,
    body: 'Hello!',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  };
};

const get = async function (event) {
  return {
    statusCode: 200,
    body: 'Hello!',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  };
};

module.exports = { list, get };