import React from 'react';
import Duration from '../Duration';
import TrackerControl from '../TrackerControl';
import style from './Tracker.module.css';

function Tracker({ tracker }) {
  const { id, name, paused, breakpoint, duration } = tracker;
  const color = paused ? style.stopped : style.running;
  const bg = paused ? '' : style['bg-running'];
  return (
    <div className={`${style.tracker} ${bg}`}>
      <h3 className={`${style.name} ${color}`}>{name}</h3>
      <Duration duration={duration} paused={paused} />
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
