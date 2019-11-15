const Joi = require('@hapi/joi');
const { availableCities } = require('../config');

const ExtendedJoi = Joi.extend((joi) => ({
  base: joi.array(),
  type: 'stringArray',
  coerce: (value) => ({ value: value ? value.split(',') : [] }),
}));

const schema = ExtendedJoi.stringArray().items(Joi.string().valid(...availableCities));

const getCities = function getAndValidateCities(query) {
  const { cities = null } = query || {};
  return schema.validateAsync(cities);
};

module.exports = { getCities };
