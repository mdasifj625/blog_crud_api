import { Router } from 'express'
// import AuthController from '../controller'

// import { authorize } from '@middlewares/authorizer'

// const authController = new AuthController()
const router = Router()

router.get('/ping', (_req, res) => {
  return res.success()
})

// router.post('/signup', Wrap(authController.Signup))

// router.post('/signin', Wrap(authController.Signin))

export const authRouter = router
