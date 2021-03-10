import React from 'react';

import StopWatch from '../StopWatch';
import Actions from '../Actions';

function Tracker({ tracker }) {
  const { name, duration, paused } = tracker;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <h3 style={{ flexGrow: 1 }}>{name}</h3>
      <StopWatch duration={duration} />
      <Actions paused={paused} />
    </div>
  );
}

export default Tracker;
