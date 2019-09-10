import React from 'react'
import Board from "../components/Board";
import AddSectionRevised from "../components/AddSectionRevised";
import ShareComp from '../components/ShareComp'

const MatchAnalysis = () => {
  return (
    <>
      <p>Ok. So you need to make a state for each round.</p>
      <p>Loop through each round and show the board state and the used/unused items</p>
      <p>Comp at each point is sharable</p>
      <ShareComp />
      <Board />
      <AddSectionRevised />
    </>
  );
}

export default MatchAnalysis;