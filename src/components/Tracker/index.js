import React from 'react';

import StopWatch from '../StopWatch';
import Actions from '../Actions';

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
      <StopWatch duration={duration} />
      <Actions
        id={id}
        paused={paused}
        onDeleteHandler={onDeleteHandler}
        onPlayPause={onPlayPause}
      />
    </div>
  );
}

export default Tracker;
