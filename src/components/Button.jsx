import React from 'react'

const Button = ({ text, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className='btn'>
        {text}
    </button>
  )
}

export default Button
