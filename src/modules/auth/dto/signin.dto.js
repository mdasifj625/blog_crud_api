import Joi from 'joi'

export default Joi.object({
  loginId: Joi.alternatives()
    .try(
      Joi.string()
        .lowercase()
        .email({ tlds: { allow: false } }),
      Joi.string().alphanum().min(3).max(30)
    )
    .required()
    .error((errors) => {
      errors[0].message = 'user name of email must be valid'
      return errors
    }),
  password: Joi.string().required(),
})
