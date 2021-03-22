import React from 'react'
import { Alert } from 'react-bootstrap'
import PropTypes from 'prop-types'

function Message({ variant, message }) {
  return <Alert variant={variant}>{message}</Alert>
}

Message.defaultProps = {
  variant: 'info',
}

Message.propTypes = {
  variant: PropTypes.string,
  message: PropTypes.string,
}

export default Message
