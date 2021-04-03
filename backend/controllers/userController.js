import User from '../models/UserModel.js'
import generateToken from '../utils/generateToken.js'

// @desc            Auth user & get a token
// @route           POST /api/users/login
// @access          Public
export async function authUser(req, res) {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    res.status(401)
    throw new Error(`No user is registered with email:  ${email}`)
  }

  const match = await user.matchPassword(password)

  if (!match) {
    res.status(401)
    throw new Error('Incorrect password')
  }
  const token = generateToken(user._id)

  res.cookie('Bearer', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  })

  return res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token,
  })
}

// @desc            Register a new user
// @route           POST /api/users/
// @access          Public
export async function registerUser(req, res) {
  const { email, password, name } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  const token = generateToken(user._id)

  res.cookie('Bearer', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  })

  return res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token,
  })
}

// @desc            Logout a user
// @route           DELETE /api/users/logout
// @access          Public

export function logout(req, res) {
  res.clearCookie('Bearer')
  res.status(204).send()
}

// @desc            GET a users profile
// @route           GET /api/users/profile
// @access          Private

export async function getUserProfile(req, res) {
  // user is added to req object by authMiddleWare
  res.json(req.user)
}
