import { Router } from 'express';
import RateLimit from 'express-rate-limit';

// import { authRouter } from '@modules/auth/routes'

const rateLimiter = RateLimit({
	windowMs: 60 * 1000 * 1, // Time window of 1 minute
	max: 1000, // Max hits allowed
	standardHeaders: false,
	legacyHeaders: false,
});

const router = Router();
router.use(rateLimiter);

// router.use('/auth', authRouter)

export const AppRoutes = router;
