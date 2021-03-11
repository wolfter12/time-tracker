import React from 'react';
import Stopwatch from '../Stopwatch';
import Control from '../Control';

function Tracker({ tracker }) {
  const { id, name, paused, breakpoint, duration } = tracker;
  const flexBox = {
    display: 'flex',
    justifyContent: 'flex-end',
  };
  const body = { flexGrow: 1 };
  return (
    <div style={flexBox}>
      <h3 style={body}>{name}</h3>
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
