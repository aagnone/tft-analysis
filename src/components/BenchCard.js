import React from 'react'
import BenchChampImage from './BenchChampImage'

const BenchCard = ({ champion, isDragging, image }) => {
  return (
    <div className="card">
      <div className="bg">
        <BenchChampImage isDragging={isDragging} image={image} />
      </div>
      <div className="txt">
        <div className="place">
          <p>{champion.name}</p>
          <p>
            {
              champion.origin.map((el, i) => <p key={i}>{el}</p>)
            }
          </p>
          <p>
            {
              champion.class.map((el, i) => <p key={i}>{el}</p>)
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default BenchCard

