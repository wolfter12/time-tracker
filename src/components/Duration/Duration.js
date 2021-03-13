import React from 'react';
import moment from 'moment';
import style from './Duration.module.css';

function Duration({ duration, paused }) {
  const currentDuration = moment.duration(duration);
  const seconds = `00${currentDuration.get('seconds')}`.slice(-2);
  const minutes = `00${currentDuration.get('minutes')}`.slice(-2);
  const hoursTotal = Math.floor(currentDuration.asHours()).toString();
  const hours = hoursTotal.length >= 2
    ? hoursTotal
    : hoursTotal.length === 1
      ? `0${hoursTotal}`
      : '00';

  const { stopwatch, stopped, running } = style;
  const color = paused ? stopped : running;
  
  return (
    <div className={`${stopwatch} ${color}`}>
      <span>{`${hours}:${minutes}:${seconds}`}</span>
    </div>
  );
}

export default Duration;
