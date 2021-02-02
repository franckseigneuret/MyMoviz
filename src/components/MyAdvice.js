import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const MyAdvice = ({ myRatingMovie }) => {
  const stars = []
  for (let i = 0; i < 10; i++) {
    let style = 'yellow'
    if (i >= myRatingMovie) {
      style = ''
    }

    stars.push(<FontAwesomeIcon key={i} icon={faStar} className={style} />)
  }

  return stars
}

export default MyAdvice