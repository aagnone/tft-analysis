import React, { useState, useContext } from 'react'
import { ChampionContext } from '../context/Champions'
import AddChampions from './AddChampions'

const AddSection = () => {
  const [isOrigin, setOrigin] = useState(true)
  const { origins, classes } = useContext(ChampionContext)

  const allOrigin = origins.map(origin => <AddChampions key={origin} filter={origin} isOrigin={isOrigin} />)
  const allClasses = classes.map(cclass => <AddChampions key={cclass} filter={cclass} isOrigin={isOrigin} />)
  return (
    <div>
      <button onClick={() => setOrigin(!isOrigin)}>{isOrigin ? 'By Class' : 'By Origin'}</button>
      <div>
        {isOrigin ? allOrigin : allClasses}
      </div>
    </div>

  );
}

export default AddSection;