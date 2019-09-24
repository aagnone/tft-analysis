import React, { useState } from 'react';
import Fade from '@material-ui/core/Fade';
import ChampionCardFront from './ChampionCardFront'
import ChampionCardBack from './ChampionCardBack'

const ChampionCard = props => {
  const [showed, setShowed] = useState(false);
  return (
    <div
      style={{ width: '100%', height: '100%', position: 'relative' }}
      onFocus={() => setShowed(true)}
      onMouseOver={() => setShowed(true)}
      onMouseLeave={() => setShowed(false)}
    >
      <ChampionCardFront {...props} />
      <ChampionCardBack isShow={showed} {...props} />

    </div>
  );
};

export default ChampionCard