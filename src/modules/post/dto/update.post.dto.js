import Joi from 'joi'

export default Joi.object({
  title: Joi.string().trim(),
  description: Joi.string().trim(),
})
