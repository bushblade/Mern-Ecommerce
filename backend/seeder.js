import mongoose from 'mongoose'
import dotenv from 'dotenv'
import 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/UserModel.js'
import Product from './models/ProductModel.js'
import Order from './models/OrderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

async function importData() {
  try {
    // delete everything in the DB
    await destroyData(false)
    // populate users
    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      }
    })

    await Product.insertMany(sampleProducts)
    console.log('Data imported'.green.inverse)
    process.exit()
  } catch (err) {
    console.err(`${err}`.red.inverse)
  }
}

async function destroyData(exit = true) {
  try {
    // delete everything in the DB
    const deleted = await Promise.all(
      [Order, Product, User].map((model) => model.deleteMany())
    )
    console.log('Data destroyed'.red.inverse)
    if (exit) process.exit()
    else return deleted
  } catch (err) {
    console.err(`${err}`.red.inverse)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
