import React, { createContext, useState } from "react";
import uuid from "uuid/v1";
import { findMissing, constructURL } from "../util/utilityFunctions";
import { withRouter } from "react-router-dom";

export const BoardContext = createContext();

const BoardContextProvider = props => {
  const [onBoard, setBoard] = useState([]);

  const move = (_id, toX, toY) => {
    const tempArray = [...onBoard];
    let objIndex = tempArray.findIndex(obj => obj.id === _id);
    const oldPosition = tempArray[objIndex].position;
    const isOccupied = checkOccupied(tempArray, toX, toY);
    if (isOccupied) {
      let swapObj = tempArray.findIndex(obj => obj.id === isOccupied);
      tempArray[swapObj].position = oldPosition;
    }
    tempArray[objIndex].position = [toX, toY];
    setBoard(tempArray);
  };

  const setComp = comp => {
    setBoard(comp);
  };

  const checkOccupied = (array, x, y) => {
    let occupiedID;
    array.forEach(el => {
      if (el.position[0] === x && el.position[1] === y) occupiedID = el.id;
    });
    return occupiedID;
  };

  const addChampion = champ => {
    const championPositions = [];
    onBoard.forEach(champ => {
      championPositions.push(champ.position[0] * 3 + champ.position[1]);
    });
    const missingPosition = findMissing(championPositions);
    const posX = Math.floor(missingPosition / 3);
    const posY = missingPosition % 3;
    const newPosition = [posX, posY];
    const newChamp = { ...champ, id: uuid(), position: newPosition };
    setBoard([...onBoard, newChamp]);
  };

  const removeChampion = id => {
    const tempArray = [...onBoard];
    var filtered = tempArray.filter(el => el.id !== id);
    setBoard(filtered);
  };

  const createURL = () => {
    let urlString = "http://localhost:3000/?comp=";
    onBoard.forEach(obChamp => (urlString += constructURL(obChamp)));
    return urlString;
  };

  return (
    <BoardContext.Provider
      value={{
        onBoard,
        setBoard,
        move,
        addChampion,
        removeChampion,
        setComp,
        createURL
      }}>
      {props.children}
    </BoardContext.Provider>
  );
};

export default withRouter(BoardContextProvider);
