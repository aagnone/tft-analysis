import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const ProductInfo = ({ name, cost, origin, cclass }) => (
  <Box px={2} pb={2}>
    <Typography
      variant={'subtitle1'}
      secondFamily
      weight={'bold'}
      gutterBottom
    >
      {name}
    </Typography>
    <Typography color={'primary'} weight={'bold'}>
      {origin[0]}
    </Typography>
    <Typography color={'primary'} weight={'bold'}>
      {origin[1]}
    </Typography>
    <Typography color={'primary'} weight={'bold'}>
      {cclass[0]}
    </Typography>
    <Typography color={'primary'} weight={'bold'}>
      {cclass[1]}
    </Typography>
  </Box>
);

export default ProductInfo;