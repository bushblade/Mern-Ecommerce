import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { savePaymentMethod } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

function PaymentScreen({ history }) {
  const shippingAddress = useSelector((state) => state.cart.shippingAddress)
  const dispatch = useDispatch()

  if (!shippingAddress) history.push('/shipping')

  const [paymentMethod, setPaymentMethod] = useState('paypal')

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='Paypal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type='submit' variant='primary' title='submit order'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

PaymentScreen.propTypes = {
  history: PropTypes.object,
}

export default PaymentScreen
