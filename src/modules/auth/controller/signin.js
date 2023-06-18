import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import requestValidator from '../../../helper/request.validator.js'
import SignInDTO from '../dto/signin.dto.js'

export default async function _SignIn(req, res) {
  const { errors, value } = await requestValidator(SignInDTO, req.body)
  if (errors) {
    return res.unprocessableEntity({ errors })
  }

  const { loginId, password } = value

  // Fetch the user with email or username
  let existingUser = App.Utils.isEmail(loginId)
    ? await App.Models.User.findOne({ email: loginId }).select('+password')
    : await App.Models.User.findOne({ username: loginId }).select('+password')

  if (!existingUser) {
    return res.unauthorized({
      message: App.Messages.SignIn.Error.UserNotExists,
    })
  }

  // Check if the password is correct
  if (!(await bcrypt.compare(password, existingUser.password))) {
    //Password incorrect
    return res.unauthorized({
      message: App.Messages.SignIn.Error.IncorrectPassword,
    })
  }

  // Generate a new JWT token
  const token = jwt.sign(
    {
      _id: existingUser._id.toString(),
    },
    App.Config.JWT_SECRET,
    {
      expiresIn: App.Config.JWT_EXPIRY,
    }
  )

  // Issue JWT to the user
  return res.success({
    message: App.Messages.SignIn.Success.SignInSuccessful,
    token,
  })
}
