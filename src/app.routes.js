import { Router } from 'express'
import RateLimit from 'express-rate-limit'

import { authRouter } from './modules/auth/routers/index.js'
import { postRouter } from './modules/post/routers/index.js'

const rateLimiter = RateLimit({
  windowMs: 60 * 1000 * 1, // Time window of 1 minute
  max: 1000, // Max hits allowed
  standardHeaders: false,
  legacyHeaders: false,
})

const router = Router()
router.use(rateLimiter)

router.use('/auth', authRouter)
router.use('/posts', postRouter)

export const AppRoutes = router
