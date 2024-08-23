import express from 'express';
import { upload, Register, Login } from '../controllers/register.controller.js';

const router = express.Router();

router.post('/register', upload.single('image'), Register);
router.post('/login', Login);

export default router;

