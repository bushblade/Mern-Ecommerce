import React from 'react'
import PropTypes from 'prop-types'

function Rating({ text, value, color }) {
  return (
    <div className='rating'>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n}>
          <i
            style={{
              color,
            }}
            className={
              value >= n
                ? 'fas fa-star'
                : value >= n - 0.5
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
