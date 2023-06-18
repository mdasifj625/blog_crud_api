export const Messages = {
  GeneralError: {
    SomethingWentWrong: 'Something went wrong.',
    BadRequest: 'Bad Request',
  },

  Signup: {
    Success: {
      SignupSuccessful: 'Account created successfully.',
    },
    Error: {
      UsernameAlreadyInUse: 'Username is not available.',
      EmailAlreadyInUse:
        'This email address already exists, please try logging in',
    },
  },
  SignIn: {
    Success: {
      SignInSuccessful: 'SignIn Successful.',
    },
    Error: {
      UserNotExists: "User doesn't exist, Please Sign Up.",
      IncorrectPassword: 'The entered credentials are wrong, Please try again.',
    },
  },
  Post: {
    Success: {
      Created: 'Post created successfully',
    },
  },
}
