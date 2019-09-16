import React, { useContext } from 'react'
import { BoardContext } from '../context/BoardContext'
import { ChampionContext } from '../context/Champions'
import { findImage } from './Images'
import { StyledChampion } from '../styledComponents/AddChampion'

const AddButton = (props) => {
  const { addChampion } = useContext(BoardContext)
  const { champs, getChampion } = useContext(ChampionContext)

  const handleAddChamp = name => {
    const championToAdd = getChampion(name);
    addChampion(champs[championToAdd]);
  }

  const champImage = findImage(props.champ.name)
  return (
    <StyledChampion role="button" href="#" champImage={champImage} onClick={() => handleAddChamp(props.champ.name)} />
  )
}

export default AddButton;