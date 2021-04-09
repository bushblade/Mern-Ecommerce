import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Message from '../components/Message'

function ProfileScreen() {
  const { userInfo, error } = useSelector((state) => state.userLogin)

  const [email, setEmail] = useState(userInfo?.email)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState(userInfo?.name)
  const [message, setMessage] = useState(null)

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      // dispatch update profile
    }
  }

  if (!userInfo) {
    return <Redirect to='/login' />
  }

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {error ? <Message variant='danger'>{error}</Message> : null}
        {message ? <Message variant='danger'>{message}</Message> : null}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type='name'
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='confirmPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  )
}

ProfileScreen.propTypes = {
  location: PropTypes.object,
}

export default ProfileScreen
