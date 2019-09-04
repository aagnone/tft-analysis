import React, { createContext, useState } from "react";
import { json2Array } from '../util/utilityFunctions'
import champions from '../tftJson/champions.json'
import uuid from 'uuid/v1'

export const ChampionContext = createContext();

const ChampionContextProvider = (props) => {
  const [champs, setChamps] = useState(json2Array(champions));

  const getChampion = (name) => {
    const tempArray = [...champs];
    let objIndex = tempArray.findIndex((obj => obj.name === name));
    return objIndex
  }

  const buildComp = (props) => {
    const composition = [];
    props.forEach(({ name, position }) => {
      const champ = champs[getChampion(name)];
      composition.push({ ...champ, position, id: uuid() })
    })
    return composition;
  }

  const origins = champs.map(champ => champ.origin[0]).filter((e, i, a) => a.indexOf(e) === i).sort()
  const classes = champs.map(champ => champ.class[0]).filter((e, i, a) => a.indexOf(e) === i).sort()

  return (
    <ChampionContext.Provider value={{ champs, setChamps, getChampion, buildComp, origins, classes }}>
      {props.children}
    </ChampionContext.Provider>
  );
}

export default ChampionContextProvider;