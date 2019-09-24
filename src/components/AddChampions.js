import React, { useContext } from "react";
import { ChampionContext } from "../context/Champions";
import ChampionCardFront from "./ChampionCardFront";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const AddChampions = ({ filter, isOrigin }) => {
  const classes = useStyles();
  const { champs } = useContext(ChampionContext);

  const buttonsOrigin = champs
    .filter(item => {
      if (item.origin[0] === filter || item.origin[1] === filter) return item;
      return null;
    })
    .map(champ => <Grid item xs key={champ.id} ><ChampionCardFront champ={champ} /></Grid>);

  const buttonsClasses = champs
    .filter(item => {
      if (item.class[0] === filter || item.class[1] === filter) return item;
      return null;
    })
    .map(champ => <Grid item xs key={champ.id}><ChampionCardFront champ={champ} /></Grid>);

  return (
    <div className={classes.root}>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(4, 1fr)` }}>
        {isOrigin ? buttonsOrigin : buttonsClasses}
      </div>
    </div>
  );
};

export default AddChampions;
