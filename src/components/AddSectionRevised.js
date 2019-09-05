import React, { useState, useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ChampionContext } from "../context/Champions";
import AddChampions from "./AddChampions";
import "react-tabs/style/react-tabs.css";

const AddSectionRevised = () => {
  const [isOrigin, setOrigin] = useState(true);
  const { origins, classes } = useContext(ChampionContext);

  const allOriginTitle = origins.map(origin => (
    <Tab key={origin}>{origin}</Tab>
  ));
  const allOriginButtons = origins.map(origin => (
    <TabPanel key={`panel${origin}`}>
      <AddChampions key={origin} filter={origin} isOrigin={isOrigin} />
    </TabPanel>
  ));
  const allClassTitle = classes.map(cclass => <Tab key={cclass}>{cclass}</Tab>);
  const allClassButtons = classes.map(cclass => (
    <TabPanel key={`panel${cclass}`}>
      <AddChampions key={cclass} filter={cclass} isOrigin={isOrigin} />
    </TabPanel>
  ));
  return (
    <>
      <button onClick={() => setOrigin(!isOrigin)}>
        {isOrigin ? "By Class" : "By Origin"}
      </button>
      <Tabs>
        <TabList>{isOrigin ? allOriginTitle : allClassTitle}</TabList>
        {isOrigin ? allOriginButtons : allClassButtons}
      </Tabs>
    </>
  );
};

export default AddSectionRevised;
