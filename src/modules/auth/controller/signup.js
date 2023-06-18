import requestValidator from '../../../helper/request.validator.js'
import SignUpDTO from '../dto/signup.dto.js'

export default async function _Signup(req, res) {
  try {
    const { errors, value } = await requestValidator(SignUpDTO, req.body)
    if (errors) {
      return res.unprocessableEntity({ errors })
    }

    const { username, firstName, email, lastName, password } = value

    // Check if { Username } is available
    let existingUserCount = await App.Models.User.find({
      username,
    }).countDocuments()
    if (existingUserCount) {
      return res.conflict({
        message: App.Messages.Signup.Error.UsernameAlreadyInUse,
      })
    }

    // Check if { Email } is available
    if (email) {
      existingUserCount = await App.Models.User.find({ email }).countDocuments()
      if (existingUserCount) {
        return res.conflict({
          message: App.Messages.Signup.Error.EmailAlreadyInUse,
        })
      }
    }

    // Create User Document
    const user = new App.Models.User({
      username,
      firstName,
      lastName,
      email,
      password,
    })

    await user.save()

    return res.created({
      message: App.Messages.Signup.Success.SignupSuccessful,
    })
  } catch (err) {
    Logger.error(err)
  }
}
