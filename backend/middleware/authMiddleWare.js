import jwt from 'jsonwebtoken'
import User from '../models/UserModel.js'

async function protect(req, res, next) {
  const token = req.cookies['Bearer']

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(decoded.id).select('-password')

    next()
  } catch (err) {
    // console.error(err)
    res.clearCookie('Bearer')
    res.status(401)
    throw new Error('Not authorized, token failed')
  }
}

export default protect
