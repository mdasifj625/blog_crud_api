import { Router } from 'express'
import AuthController from '../controller/index.js'

const authController = new AuthController()
const router = Router()

router.get('/ping', (_req, res) => {
  return res.success()
})

router.post('/signup', authController.Signup.bind())

router.post('/signin', authController.SignIn.bind())

export const authRouter = router
