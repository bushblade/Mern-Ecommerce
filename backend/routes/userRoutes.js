import express from 'express'

const router = express.Router()

import {
  authUser,
  registerUser,
  getUserProfile,
  logout,
  updateUserProfile,
} from '../controllers/userController.js'
import protect from '../middleware/authMiddleWare.js'

router.route('/').post(registerUser)
router.post('/login', authUser)
router.delete('/logout', logout)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router
