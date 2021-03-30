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

  return res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user._id),
  })
}
