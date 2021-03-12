import React from 'react';
import Duration from '../Duration';
import TrackerControl from '../TrackerControl';
import style from './Tracker.module.css';

function Tracker({ tracker }) {
  const { id, name, paused, breakpoint, duration } = tracker;
  return (
    <div className={style.tracker}>
      <h3 className={style.name}>{name}</h3>
      <Duration duration={duration} />
      <TrackerControl
        id={id}
        paused={paused}
        breakpoint={breakpoint}
        duration={duration}
      />
    </div>
  );
}

export default Tracker;
