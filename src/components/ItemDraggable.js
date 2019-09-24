import React, { useContext } from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import ItemTypes from '../util/ItemTypes'
import ChampionImage from './ChampionImage'
import BenchCard from './BenchCard'
import { BoardContext } from '../context/BoardContext'

const Draggable = ({ image, bench, champion }) => {
  const { removeChampion } = useContext(BoardContext)
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.ITEM, id: champion.id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      const itemDragging = item.id
      if (dropResult === null) removeChampion(itemDragging)
    }
  })

  return (
    <div id={champion.id} ref={drag} style={{ height: '100%', width: 'auto'}}>
      <DragPreviewImage connect={preview} src={image} />
      {bench && <BenchCard champion={champion} isDragging={isDragging} image={image} />}
      {!bench && <ChampionImage isDragging={isDragging} image={image} />}
    </div>
  )
}

export default Draggable;