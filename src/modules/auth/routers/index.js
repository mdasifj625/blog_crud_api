import { Router } from 'express'
import AuthController from '../controller/index.js'

// import { authorize } from '@middlewares/authorizer'

const authController = new AuthController()
const router = Router()

router.get('/ping', (_req, res) => {
  return res.success()
})

router.post('/signup', authController.Signup.bind())

// router.post('/signin', Wrap(authController.Signin))

export const authRouter = router
