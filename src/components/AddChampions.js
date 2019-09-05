import React, { useContext } from "react";
import { ChampionContext } from "../context/Champions";
import AddButton from "./AddButton";

const AddChampions = ({ filter, isOrigin }) => {
  const { champs } = useContext(ChampionContext);

  const buttonsOrigin = champs
    .filter(item => {
      if (item.origin[0] === filter || item.origin[1] === filter) return item;
      return null;
    })
    .map(champ => <AddButton key={champ.id} name={champ.name} />);

  const buttonsClasses = champs
    .filter(item => {
      if (item.class[0] === filter || item.class[1] === filter) return item;
      return null;
    })
    .map(champ => <AddButton key={champ.id} name={champ.name} />);

  return (
    <div>
      <h1>{filter}</h1>
      {isOrigin ? buttonsOrigin : buttonsClasses}
    </div>
  );
};

export default AddChampions;
