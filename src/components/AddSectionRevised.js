import React, { useState, useContext } from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ChampionContext } from "../context/Champions";
import AddChampions from "./AddChampions";
import SwipeableViews from 'react-swipeable-views';
import TabPanel from './TabPanel'
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';




const AddSectionRevised = () => {
  const [isOrigin, setOrigin] = useState(true);
  const [value, setValue] = useState(0);
  const { origins, classes } = useContext(ChampionContext);

  const a11yProps = index => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const handleChangeIndex = (index) => {
    setValue(index);
  }

  const allOriginTitle = origins.map((origin, i) => (
    <Tab label={origin} key={origin} {...a11yProps(i)} />
  ));
  const allOriginButtons = origins.map((origin, i) => (
    <TabPanel value={value} index={i} dir="ltr" key={`panel${origin}`}>
      <AddChampions key={origin} filter={origin} isOrigin={isOrigin} />
    </TabPanel>
  ));


  const allClassTitle = classes.map((cclass, i) => (
    <Tab label={cclass} key={cclass} {...a11yProps(i)} />
  ));
  const allClassButtons = classes.map((cclass, i) => (
    <TabPanel value={value} index={i} dir="ltr" key={`panel${cclass}`}>
      <AddChampions key={cclass} filter={cclass} isOrigin={isOrigin} />
    </TabPanel>
  ));

  return (
    <div style={{ position: 'absolute', top: 0, right: 0, width: '50vw', height: '60vh', padding: '10px' }}>
      {/* <button onClick={() => setOrigin(!isOrigin)}>
        {isOrigin ? "By Class" : "By Origin"}
      </button> */}
      <Grid item style={{ padding: '5px', marginBottom: '15px' }}>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="full-width contained primary button group"
        >
          <Button onClick={() => setOrigin(true)}>By Origin</Button>
          <Button onClick={() => setOrigin(false)}>By Class</Button>
          <Button>By Grid</Button>
        </ButtonGroup>
      </Grid>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="full width tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          {isOrigin ? allOriginTitle : allClassTitle}
        </Tabs>
      </AppBar>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{ padding: ' 25px 5px' }}
      >
        {isOrigin ? allOriginButtons : allClassButtons}
      </SwipeableViews>
    </div>
  );
};

export default AddSectionRevised;
