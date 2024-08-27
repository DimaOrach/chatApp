import express from 'express';
import users from '../controllers/user.controller.js';
import VerifyUser from '../middleware/verifyUser.js';

const router = express.Router();

router.get('/', VerifyUser, users);

export default router