import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const InfoBack = ({ items, stats: { offense: { damage, attackSpeed, dps, range }, defense: { health, armor, magicResist } } }) => (
  <Box px={2.5} pt={2}>
    <Typography align='center' align='left' gutterBottom color='#fff' weight='bold' variant='subtitle1'>
      Items
    </Typography>
    {items.map(item => <Typography
      variant={'subtitle2'}
      align='left'
    >{item}</Typography>)}
    <br />
    <Typography align='justify' color='#fff' weight={'bold'}>
      Attack Damage: {damage}
    </Typography>
    <Typography align='justify' color='#fff' weight={'bold'}>
      Attack Speed: {attackSpeed}
    </Typography>
    <Typography align='justify' color='#fff' weight={'bold'}>
      DPS: {dps}
    </Typography>
    <Typography align='justify' color='#fff' weight={'bold'}>
      Range: {range}
    </Typography>
    <Typography align='justify' color='#fff' weight={'bold'}>
      Health: {health}
    </Typography>
    <Typography align='justify' color='#fff' weight={'bold'}>
      Magic Resist: {armor}
    </Typography>
    <Typography align='justify' color='#fff' weight={'bold'}>
      Armor: {magicResist}
    </Typography>
  </Box>
);

export default InfoBack;