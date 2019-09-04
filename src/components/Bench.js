import React, { useContext } from 'react'
import { BoardContext } from '../context/BoardContext'
import { StyledBench } from '../styledComponents/Bench'
import { findImage } from './Images'

import Draggable from './Draggable'
import BenchDroppable from './BenchDroppable'

const Bench = props => {
  const { onBoard, move } = useContext(BoardContext)

  const defineGrid = () => {
    const grid = [];
    for (let i = 0; i < 10; i++) {
      let x = i % 10;
      let y = 4;
      const cell = onBoard.reduce((acc, c) => {
        if (x === c.position[0] && y === c.position[1]) return <Draggable image={findImage(c.name)} bench="true" champion={c} />
        else return acc
      }, null)


      grid.push(
        <BenchDroppable x={x} y={y} key={i} move={move} bench={true}>
          {cell}
        </BenchDroppable>
      )
    }
    return grid
  }

  return (
    <StyledBench gridNum="10">{defineGrid()}</StyledBench>
  )
}

export default Bench