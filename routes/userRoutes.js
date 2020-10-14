import express from 'express';
import {
  authUser,
  createUser,
  deleteUser,
  getUserProfile,
  getUsers,
  updateProfile,
} from '../controllers/userController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(createUser).get(protect, admin, getUsers);
router.post('/login', authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateProfile);
router.route('/:id').delete(protect, admin, deleteUser);
export default router;
