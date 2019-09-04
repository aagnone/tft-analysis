import React from 'react'

const ChampionImage = ({ image, isDragging, bench }) => {
  return (
    <img src={image} alt="test" style={{ height: '100%', width: 'auto',opacity: isDragging ? 0 : 1 }} />
  )
}

export default ChampionImage