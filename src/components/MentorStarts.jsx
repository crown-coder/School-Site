import React from 'react'
import './MentorStarts.css';
const MentorStarts = () => {
  const totalPurchases = 120; // to be replace with dynamic data
  const totalProfit = 600; // also to be replaced with dynamic data

  return (
    <div className='mentor-stats'>
      <div className='stat'>
        <h3>Total Purchases</h3>
        <p>{totalPurchases}</p>
      </div>
      <div className='stat'>
        <h3>Total Profit</h3>
        <p>${totalProfit}</p>
      </div>
    </div>
  )
}

export default MentorStarts
