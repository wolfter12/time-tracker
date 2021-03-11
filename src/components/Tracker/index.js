import React from 'react';

import Stopwatch from '../Stopwatch';
import Control from '../Control';

function Tracker({ tracker }) {
  const { id, name, paused, breakpoint, duration } = tracker;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <h3 style={{ flexGrow: 1 }}>{name}</h3>
      <Stopwatch duration={duration} />
      <Control
        id={id}
        paused={paused}
        breakpoint={breakpoint}
        duration={duration}
      />
    </div>
  );
}

export default Tracker;
