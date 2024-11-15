import React from 'react'

const Card = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className='card' onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={imageUrl} alt={title} className='card-image' />
      <div className='card-content'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card
