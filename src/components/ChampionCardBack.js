import React, { forwardRef } from 'react';
import cx from 'clsx';
import Color from 'color';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import ChampionInfo from './ChampionInfo';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: Color('#333')
      .fade(0.3)
      .toString(),
    boxShadow: `0 2px 12px 0 ${Color('#333')
      .fade(0.2)
      .toString()}`,
    zIndex: 2,
  },
  productImage: {
    position: 'relative',
    paddingBottom: '100%',
  },
  buyNow: {
    background: '#fff',
    boxShadow: `0 2px 6px 0 #555`,
    '&:hover': {
      background: '#fff',
    },
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}));

const ChampionCardBack = forwardRef((props, ref) => {
  const classes = useStyles();
  const iconProps = {
    shape: 'circular',
    inverted: true,
    size: 'big',
  };
  return (
    <Box
      ref={ref}
      className={cx(classes.root, classes.absolute)}
      bgcolor={'common.white'}
      style={{ opacity: props.isShowed ? 1 : 0, transition: 'all .4s ease' }}
    >
      <Box p={2}>
        <div className={classes.productImage}>
          <Box
            className={classes.absolute}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
          >
            <Box display={'flex'} justifyContent={'space-between'}>
              <Button {...iconProps} icon={'fab fa-facebook'} />
              <Button {...iconProps} icon={'fab fa-instagram'} />
              <Button {...iconProps} icon={'far fa-heart'} />
              <Hidden only={'xs'}>
                <Button {...iconProps} icon={'far fa-share'} />
              </Hidden>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  variant={'outlined'}
                  inverted
                  shape={'chubby'}
                  fullWidth
                >
                  Detail
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button className={classes.buyNow} shape={'chubby'} fullWidth>
                  Buy
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>
      <ChampionInfo name={props.champ.name} cost={props.champ.cost} origin={props.champ.origin} cclass={props.champ.class} />
    </Box>
  );
});


export default ChampionCardBack;