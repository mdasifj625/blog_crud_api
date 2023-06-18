import Joi from 'joi'

export default Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
})
