import React from 'react'
import { Alert } from 'react-bootstrap'
import PropTypes from 'prop-types'

function Message({ variant, message, children }) {
  return <Alert variant={variant}>{message ? message : children}</Alert>
}

Message.defaultProps = {
  variant: 'info',
}

Message.propTypes = {
  variant: PropTypes.string,
  message: PropTypes.string,
  children: PropTypes.array,
}

export default Message
