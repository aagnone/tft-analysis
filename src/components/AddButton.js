import React, { useContext } from 'react'
import { BoardContext } from '../context/BoardContext'
import { ChampionContext } from '../context/Champions'
import { findImage } from './Images'

const AddButton = (props) => {
  const { addChampion } = useContext(BoardContext)
  const { champs, getChampion } = useContext(ChampionContext)

  const handleAddChamp = name => {
    const championToAdd = getChampion(name);
    addChampion(champs[championToAdd]);
  }

  const champImage = findImage(props.name)
  return (
    <div role="button" href="#" style={{ display: 'inline-block', backgroundImage: `url(${champImage})`, border: 'none', height: '100px', width: '100px', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} onClick={() => handleAddChamp(props.name)} />
  )
}

export default AddButton;