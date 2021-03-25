import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

// Why are we adding to cart with URL query?

function CartScreen({ match, location, history }) {
  const productId = match.params.id

  const qty = location.search
    ? Number(new URLSearchParams(location.search).get('qty'))
    : 1
  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.cart.cartItems)
  console.log(cartItems)

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  return (
    <div>
      <p>Cart</p>
    </div>
  )
}

CartScreen.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
}

export default CartScreen
