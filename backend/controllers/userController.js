import User from '../models/UserModel.js'
import generateToken from '../utils/generateToken.js'

const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: 'Strict', // Strict | Lax | None
  maxAge: 1000 * 60 * 60 * 24 * 3, // 3 days
}

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

  res.cookie('Bearer', token, cookieOptions)

  return res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
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

  res.cookie('Bearer', token, cookieOptions)

  return res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  })
}

// @desc            Logout a user
// @route           DELETE /api/users/logout
// @access          Public

export function logout(_, res) {
  res.clearCookie('Bearer', cookieOptions)
  res.status(204).send() // 204 no content
}

// @desc            GET a users profile
// @route           GET /api/users/profile
// @access          Private

export async function getUserProfile(req, res) {
  if (!req.user) {
    res.status(400)
    throw new Error('User not found')
  }
  // user is added to req object by authMiddleWare
  res.json({
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    isAdmin: req.user.isAdmin,
  })
}

// @desc            Update a user profile
// @route           PUT /api/users/profile
// @access          Private

export async function updateUserProfile(req, res) {
  if (!req.user) {
    res.status(400)
    throw new Error('User not found')
  }
  const { name, email, password } = req.body
  if (name) req.user.name = name
  if (email) req.user.email = email
  if (password) req.user.password = password

  await req.user.save()

  res.json({
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    isAdmin: req.user.isAdmin,
  })
}
