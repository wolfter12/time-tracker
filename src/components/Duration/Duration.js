import React from 'react';
import style from './Duration.module.css';
import formatDuration from '../../functions/formatDuration';

function Duration({ duration, paused }) {
  const formattedDuration = formatDuration(duration);

  const { stopwatch, stopped, running } = style;
  const color = paused ? stopped : running;

  return (
    <div className={`${stopwatch} ${color}`}>
      <span>{formattedDuration}</span>
    </div>
  );
}

export default Duration;
