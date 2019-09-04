import React from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from '../util/ItemTypes'

const hexagonInside = {
  width: '100%',
  height: '100%',
  background: 'black',
  transform: 'rotate(-120deg)',
  overflow: 'hidden',
  position: 'relative'
}

const Droppable = ({ x, y, move, children, bench }) => {
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
    <div className="cell" ref={drop} style={hexagonInside}>
      {children}
    </div>

  )
}

export default Droppable;
