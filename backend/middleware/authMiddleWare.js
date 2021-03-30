import jwt from 'jsonwebtoken'
import User from '../models/UserModel.js'

async function protect(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }

  const token = authHeader.split(' ')[1]

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(decoded.id).select('-password')

    next()
  } catch (err) {
    console.error(err)
    res.status(401)
    throw new Error('Not authorized, token failed')
  }
}

export default protect
