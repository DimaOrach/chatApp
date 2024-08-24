import express from 'express';
import { upload, Register, Login, verify } from '../controllers/register.controller.js';
import VerifyUser from '../middleware/verifyUser.js';

const router = express.Router();

router.post('/register', upload.single('image'), Register);
router.post('/login', Login);
router.get('/verify', VerifyUser, verify);

export default router;

