import React from "react";
import Board from "../components/Board";
import AddSectionRevised from "../components/AddSectionRevised";
import SelectComp from '../components/SelectComp'
import ShareComp from '../components/ShareComp'

const Comps = () => {
  return (
    <>
      <SelectComp />
      <ShareComp />
      <Board />
      <AddSectionRevised />
    </>
  );
};

export default Comps;
