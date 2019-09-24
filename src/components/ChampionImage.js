import React from 'react'
import { StyledHexImage } from '../styledComponents/PlayingField'
import ItemDroppable from './ItemDroppable'

const ChampionImage = ({ image, isDragging, bench }) => {
  return (
    <StyledHexImage className="hexagon-image">
      <ItemDroppable />
      <img src={image} alt="test" style={{ height: '120%', transform: bench ? '' : 'rotate(-30deg)', width: 'auto', opacity: isDragging ? 0 : 1, }} />
    </StyledHexImage>
  )
}

export default ChampionImage