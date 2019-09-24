import React from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from '../util/ItemTypes'

const hexagonInside = {
  width: '50px',
  height: '50px',
  background: 'black',
  position: 'absolute',
  overflow: 'hidden',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

const Droppable = ({ x, y, move, children }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CHAMPION,
    drop: (item) => {
      move(item.id, x, y)
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  })

  return (
    <div ref={drop} style={hexagonInside}>
      {children}
    </div>

  )
}

export default Droppable;
