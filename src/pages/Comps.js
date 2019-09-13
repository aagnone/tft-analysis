import React from "react";
import Board from "../components/Board";
import SelectComp from '../components/SelectComp'
import ShareComp from '../components/ShareComp'

const Comps = () => {
  return (
    <>
      <SelectComp />
      <ShareComp />
      <Board />
    </>
  );
};

export default Comps;
