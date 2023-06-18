import jwt from 'jsonwebtoken'
export async function authorize(req, res, next) {
  try {
    if (!req.headers.authorization) {
      return res.unauthorized()
    }

    const token = req.headers.authorization
      ? req.headers.authorization.split(' ')[1]
      : req.headers.Authorization.split(' ')[1]
    let payload

    try {
      payload = jwt.verify(token, App.Config.JWT_SECRET)
    } catch (jwtErr) {
      return res.unauthorized({ errors: jwtErr })
    }

    const user = await App.Models.User.findOne({ _id: payload._id })

    if (!user) {
      return res.unauthorized()
    }

    req.user = user
    return next()
  } catch (error) {
    Logger.error(error)
    return res.internalServerError({ error })
  }
}
