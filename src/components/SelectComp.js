import React, { useState, useContext, useEffect } from "react";
import { BoardContext } from "../context/BoardContext";
import { ChampionContext } from "../context/Champions";
import { BurstRangers, VoidAssassin, GuardianSS, HybridSS } from "./Comps";

const SelectComp = () => {
  const { setComp, createURL } = useContext(BoardContext);
  const { buildComp } = useContext(ChampionContext);
  const [comp, selectComp] = useState({ name: "", team: [], items: "" });


  const handleChange = e => {
    selectComp({ ...comp, name: e.target.value });
  };

  useEffect(() => {
    let composition = [];
    switch (comp.name) {
      case "burstrangers":
        composition = buildComp(BurstRangers.comp);
        selectComp(BurstRangers);
        setComp(composition);
        break;
      case "voidassassin":
        composition = buildComp(VoidAssassin.comp);
        selectComp(VoidAssassin);
        setComp(composition);
        break;
      case "guardianss":
        composition = buildComp(GuardianSS.comp);
        selectComp(GuardianSS);
        setComp(composition);
        break;
      case "hybridss":
        composition = buildComp(HybridSS.comp);
        selectComp(HybridSS);
        setComp(composition);
        break;
      default:
        return;
    }
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comp]);

  const recoItems = () => comp.items.map(item => <li>{item}</li>);

  return (
    <div>
      <label>Select Comp</label>
      <select value={comp.name} onChange={handleChange}>
        <option value=""></option>
        <option value="burstrangers">Burst Rangers</option>
        <option value="voidassassin">Void Assassin</option>
        <option value="guardianss">Guardian ShapeShifters</option>
        <option value="hybridss">Hybrid ShapeShifters</option>
      </select>
      <p>Selected Comp: {comp.name}</p>
      <p>Recommended Items: </p>
      <ul>{comp.items.length > 1 ? recoItems() : ""}</ul>
    </div>
  );
};

export default SelectComp;
