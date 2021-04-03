import express from 'express'

const router = express.Router()

import {
  authUser,
  registerUser,
  getUserProfile,
  logout,
} from '../controllers/userController.js'
import protect from '../middleware/authMiddleWare.js'

router.route('/').post(registerUser)
router.post('/login', authUser)
router.delete('/logout', logout)
router.route('/profile').get(protect, getUserProfile)

export default router
