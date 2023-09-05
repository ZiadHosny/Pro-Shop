import express from 'express';
import {
    authUser,
    deleteUser,
    getUserById,
    getUserProfile,
    getUsers,
    logoutUser,
    registerUser,
    updateUserProfile,
} from '../controllers/userController.js';
import { admin, protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.route('/')
    .post(registerUser)
    .get(protect, admin, getUsers);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);
router
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUserProfile);

export default router;
