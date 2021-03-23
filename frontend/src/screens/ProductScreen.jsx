import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Rating from '../components/Rating'

function ProductScreen({ match, history }) {
  const [qty, setQty] = useState(0)
  const productDetails = useSelector((state) => state.productDetails)
  const dispatch = useDispatch()
  const { product, error } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [match.params.id, dispatch])

  const addToCartHandler = () => {
    if (qty > 0) {
      history.push(`/cart/${match.params.id}?qty=${qty}`)
    }
  }

  if (!product) return <h1>Fetching product</h1>

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {!product._id || product._id !== match.params.id ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' message={error} />
      ) : (
        <Row>
          <Col md={6}>
            <Image fluid src={product.image} alt={product.name} />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: ${product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 ? (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {Array.from({ length: product.countInStock }).map(
                            (_, i) => (
                              <option key={`option${i + 1}`} value={i + 1}>
                                {i + 1}
                              </option>
                            )
                          )}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ) : null}

                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className='btn-block'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}

ProductScreen.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default ProductScreen
