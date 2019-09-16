import React, { useContext } from 'react'
import { BoardContext } from '../context/BoardContext'
import { ChampionContext } from '../context/Champions'
import { findImage } from './Images'
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/styles';
import ChampionInfo from './ChampionInfo';

const useStyles = makeStyles(({ palette }) => ({
  buttonBase: {
    display: 'inline-block',
    height: '100%',
    width: '100%',
  },
  productImage: {
    position: 'relative',
    paddingBottom: '100%',
    overflow: 'hidden',
    backgroundColor: '#333',
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    objectFit: 'cover',
  },
}));

const ChampionCardFront = (props) => {
  const classes = useStyles();
  const { addChampion } = useContext(BoardContext)
  const { champs, getChampion } = useContext(ChampionContext)

  const handleAddChamp = name => {
    const championToAdd = getChampion(name);
    addChampion(champs[championToAdd]);
  }

  const champImage = findImage(props.champ.name)
  const bordered = true

  const calcCost = (cost) => {
    switch (cost) {
      case 1:
        return 'rgba(128, 128, 128, .3)'
      case 2:
        return 'rgba(16, 165, 126, .3)'
      case 3:
        return 'rgba(32, 122, 199, .3)'
      case 4:
        return 'rgba(181, 59, 201, .3)'
      case 5:
        return 'rgba(255, 185, 59, .3)'
      default:
        return cost
    }
  }
  return (
    <ButtonBase className={classes.buttonBase} onClick={() => handleAddChamp(props.champ.name)}>
      <Box
        height={'100%'}
        {...bordered && {
          border: '1px solid #f0f0f0',
          borderTop: 'none',
          marginLeft: '-1px',
          marginTop: '-1px',
        }}
        style={{ background: calcCost(props.champ.cost) }}
      >
        <Box p={2}>
          <div className={classes.productImage}>
            <img className={classes.img} src={champImage} alt={'champion'} />
          </div>
        </Box>
        <ChampionInfo name={props.champ.name} cost={props.champ.cost} origin={props.champ.origin} cclass={props.champ.class} />
      </Box>
    </ButtonBase>
  );
};


export default ChampionCardFront;