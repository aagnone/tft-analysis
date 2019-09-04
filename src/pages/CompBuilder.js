import React from 'react'
import Board from '../components/Board'
import SelectComp from '../components/SelectComp';
import AddSection from '../components/AddSection';

const CompBuilder = ({ match }) => {
  return (
    <div>
      <SelectComp />
      <Board />
      <AddSection />
    </div>
  );
}

export default CompBuilder;