import React from 'react';
import moment from 'moment';
import 'moment-duration-format';

function StopWatch({ duration }) {
  const currentDuration = moment.duration(duration);
  const seconds = `00${currentDuration.get('seconds')}`.slice(-2);
  const minutes = `00${currentDuration.get('minutes')}`.slice(-2);
  const hours = `00${currentDuration.get('hours')}`.slice(-2);
  return (
    <div>
      <span>{`${hours}:${minutes}:${seconds}`}</span>
    </div>
  );
}

export default StopWatch;
