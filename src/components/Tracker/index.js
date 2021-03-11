import React from 'react';

import Stopwatch from '../Stopwatch';
import Control from '../Control';

function Tracker({ tracker, onDeleteHandler, onPlayPause }) {
  const { id, name, duration, paused } = tracker;
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
        onDeleteHandler={onDeleteHandler}
        onPlayPause={onPlayPause}
      />
    </div>
  );
}

export default Tracker;
