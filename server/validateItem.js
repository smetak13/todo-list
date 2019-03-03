const Joi = require('joi');

function validateItem(item) {
  const schema = Joi.object().keys({
    _id: Joi.string(),
    value: Joi.string()
      .min(1)
      .required(),
    isActive: Joi.boolean().required(),
    date: Joi.string(),
    __v: Joi.number()
  });

  return Joi.validate(item, schema);
}

module.exports = validateItem;
