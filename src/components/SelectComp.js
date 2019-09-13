import React, { useState, useContext, useEffect } from "react";
import { BoardContext } from "../context/BoardContext";
import { ChampionContext } from "../context/Champions";
import { BurstRangers, VoidAssassin, GuardianSS, HybridSS } from "./Comps";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const SelectComp = () => {
  const { setComp } = useContext(BoardContext);
  const { buildComp } = useContext(ChampionContext);
  const [comp, selectComp] = useState({ name: "", team: [], items: "" });
  const classes = useStyles();
  const [open, setOpen] = useState(false);


  const handleChange = e => {
    selectComp({ ...comp, name: e.target.value });
  };

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

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

  const recoItems = () => comp.items.map(item => <li key={item}>{item}</li>);

  return (
    <div>
      <Button onClick={handleOpen}>Open select dialog</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Choose a Composition</DialogTitle>
        <DialogContent>
          <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="compositions">Compositions</InputLabel>
              <Select
                value={comp.name}
                onChange={handleChange}
                inputProps={{
                  name: 'comp',
                  id: 'compositions',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value='burstrangers'>Burst Rangers</MenuItem>
                <MenuItem value='voidassassin'>Void Assassin</MenuItem>
                <MenuItem value='guardianss'>Guardian ShapeShifters</MenuItem>
                <MenuItem value='hybridss'>Hybrid ShapeShifters</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>


      <p>Selected Comp: {comp.name}</p>
      <p>Recommended Items: </p>
      <ul>{comp.items.length > 1 ? recoItems() : ""}</ul>
    </div>
  );
};

export default SelectComp;
