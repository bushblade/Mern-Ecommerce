import React from 'react'
import PropTypes from 'prop-types'

function Rating({ text, value, color }) {
  return (
    <div className='rating'>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>
          <i
            style={{
              color,
            }}
            className={
              value >= i + 1
                ? 'fas fa-star'
                : value >= i + 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
      ))}
      <span>{text ? text : null}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
}

Rating.propTypes = {
  value: PropTypes.number,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Rating
