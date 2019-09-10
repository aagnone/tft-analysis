import React, { createContext, useState } from "react";

export const MatchContext = createContext();

const MatchContextProvider = props => {
  const [match, setMatch] = useState([]);

  return (
    <MatchContext.Provider
      value={{
        match,
        setMatch
      }}>
      {props.children}
    </MatchContext.Provider>
  );
};

export default MatchContextProvider


// [
//   {
//     board: ['Aatrox', 'Garen', 'Vayne'],
//     unusedItems: ['BF Sword', 'Recurve Bow']
//   }
// ]