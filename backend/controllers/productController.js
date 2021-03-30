import Product from '../models/ProductModel.js'

// @desc            Fetch all products
// @route           GET /api/products
// @access          Public
export async function getProducts(req, res) {
  const products = await Product.find({}).sort({ numReviews: 'asc' })
  return res.json(products)
}

// @desc            Fetch single product by id
// @route           GET /api/products/:id
// @access          Public
export async function getProductById(req, res) {
  const product = await Product.findById(req.params.id)
  if (product) {
    return res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
}
