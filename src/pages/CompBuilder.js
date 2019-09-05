import React, { useEffect, useContext } from "react";
import Board from "../components/Board";
import SelectComp from "../components/SelectComp";
import AddSectionRevised from "../components/AddSectionRevised";
import { ChampionContext } from "../context/Champions";
import uuid from "uuid/v1";
import { BoardContext } from "../context/BoardContext";

const CompBuilder = props => {
  let params = new URLSearchParams(props.location.search);
  const { champs } = useContext(ChampionContext);
  const { setComp } = useContext(BoardContext);

  // eslint-disable react-hooks/exhaustive-deps
  useEffect(() => {
    const tempComp = [];
    let urlComp = params.get("comp");
    if (urlComp) {
      urlComp = urlComp.match(/[^\d]+|\d+/g);
      let champions = [];
      let positions = [];
      urlComp.forEach((val, i) => {
        if (i % 2 === 0) champions.push(val);
        else positions.push(val.match(/.{1,1}/g));
      });
      console.log(champions, positions);
      champions.forEach((val, i) => {
        let newString = val.charAt(0).toUpperCase() + val.slice(1);
        let indexNum = champs.findIndex(element =>
          element.name.includes(newString)
        );
        if (indexNum === -1) return;

        tempComp.push({
          ...champs[indexNum],
          position: [parseInt(positions[i][0]), parseInt(positions[i][1])],
          id: uuid()
        });
      });
      setComp(tempComp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <SelectComp />
      <Board />
      <AddSectionRevised />
    </div>
  );
};

export default CompBuilder;
