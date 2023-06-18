export const Messages = {
	ClassValidatorMessages: {
		InvalidEmail: 'Please enter the email address in a valid format.',
		InvalidUsername: 'Please enter the username in a valid format.',
		InvalidPassword:
			'The password should have min 8 characters ( 1 numeric, 1 special character(@, !), and 1 caps letter).',
	},

	GeneralError: {
		SomethingWentWrong: 'Something went wrong.',
		BadRequest: 'Bad Request',
	},
	Helpers: {
		OTPHelper: {
			CodeSentSuccessFullyOverEmail:
				'This is your One Time Password: {{OTP}} from {{BrandName}}',
		},
		VerifyLinkHelper: {
			ForgotPasswordSMS: 'Link {{verifyLink}} from {{BrandName}}',
		},
	},

	Signup: {
		Success: {
			SignupSuccessful: 'Account created successfully.',
		},
		Error: {
			PreSignCodeVerificationFailed: 'Code verification failed.',
			UsernameAlreadyInUse: 'Username is not available.',
			EmailAlreadyInUse:
				'This email address already exists, please try logging in',
			PhoneAlreadyInUse:
				'This phone number already exists, Please try logging in.',
		},
	},
	Signin: {
		Success: {
			SigninSuccessful: 'Signin Successful.',
		},
		Error: {
			UserNotExists: "User doesn't exist, Please Sign Up.",
			IncorrectPassword:
				'The entered credentials are wrong, Please try again.',
			AccountBlockedDueToMultipleAttempts:
				'Due to multiple wrong attempts you are not allowed to log in for {{timeLeftToUnblock}}.',
			DisabledAccount: 'Your account has been disabled.',
			PasswordSignInNotAllowedInSocialAccount:
				'Your account is created with Social Signup, please try with Social Login!',
		},
	},
};
