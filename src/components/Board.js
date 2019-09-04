import React, { useContext } from 'react'
import { BoardContext } from '../context/BoardContext'
import { StyledPF, StyledHexImage, StyledContainer, StyledHexagon } from '../styledComponents/PlayingField'
import { findImage } from './Images'

import Draggable from './Draggable'
import Droppable from './Droppable'



export default function Board(props) {
  const { onBoard, move } = useContext(BoardContext)

  const defineGrid = () => {
    const grid = [];
    for (let i = 0; i < 21; i++) {
      let x = i % 7;
      let y = Math.floor((i / 7) % 3);
      let champion;
      const cell = onBoard.reduce((acc, c) => {
        if (x === c.position[0] && y === c.position[1]) {
          champion = c.name;
          return <Draggable key={c.id} image={findImage(c.name)} champion={c} />
        } else return acc
      }, null)


      grid.push(
        <StyledContainer key={i} className="container">
          <StyledHexagon className="hexagon">
            <Droppable className="hexagon-inside" x={x} y={y} key={i} move={move} champion={champion}>
              <StyledHexImage className="hexagon-image" />
              {cell}
            </Droppable>
          </StyledHexagon>
        </StyledContainer>
      )
    }
    return grid
  }

  return (
    <StyledPF>{defineGrid()}</StyledPF>
  )
}