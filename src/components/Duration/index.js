import React from 'react';
import moment from 'moment';
import style from './Duration.module.css';

function Duration({ duration }) {
  const currentDuration = moment.duration(duration);
  const seconds = `00${currentDuration.get('seconds')}`.slice(-2);
  const minutes = `00${currentDuration.get('minutes')}`.slice(-2);
  // TODO: Format hours output more precisely
  const hours = `00${Math.floor(currentDuration.asHours())}`.slice(-2);
  return (
    <div className={style.stopwatch}>
      <span>{`${hours}:${minutes}:${seconds}`}</span>
    </div>
  );
}

export default Duration;
