import React from 'react';
import moment from 'moment';

function Stopwatch({ duration }) {
  const currentDuration = moment.duration(duration);
  const seconds = `00${currentDuration.get('seconds')}`.slice(-2);
  const minutes = `00${currentDuration.get('minutes')}`.slice(-2);
  // TODO: Format hours output more precisely
  const hours = `00${Math.floor(currentDuration.asHours())}`.slice(-2);
  return (
    <div>
      <span>{`${hours}:${minutes}:${seconds}`}</span>
    </div>
  );
}

export default Stopwatch;
