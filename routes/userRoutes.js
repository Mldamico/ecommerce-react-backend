import express from 'express';

import {
  authUser,
  getUserProfile,
  getUsers,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', getUsers);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);

export default router;
