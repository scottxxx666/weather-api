const Joi = require('@hapi/joi');

const ExtendedJoi = Joi.extend((joi) => ({
  base: joi.array(),
  type: 'stringArray',
  coerce: (value) => ({ value: value ? value.split(',') : [] }),
}));

const schema = ExtendedJoi.stringArray().items(Joi.string().valid(...['臺北市', '桃園市']));

const getCities = function getAndValidateCities(query) {
  const { cities = null } = query || {};
  return schema.validateAsync(cities);
};

module.exports = { getCities };
