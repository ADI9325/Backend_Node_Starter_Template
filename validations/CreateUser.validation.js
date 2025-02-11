const Joi = require('joi');

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.number().required(),
  role_id: Joi.number().required(),
  user_name: Joi.string().required(),
  password: Joi.string().min(6).required(),
  status: Joi.boolean().required(),
});

module.exports = createUserSchema;
