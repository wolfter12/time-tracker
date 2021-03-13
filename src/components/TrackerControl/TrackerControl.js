import React from 'react';
import StopwatchControlButton from '../StopwatchControlButton';
import DeleteButton from '../DeleteButton';
import style from './TrackerControl.module.css';

function TrackerControl({ id, paused, breakpoint, duration }) {
  return (
    <div className={style.control}>
      <StopwatchControlButton
        id={id}
        paused={paused}
        breakpoint={breakpoint}
        duration={duration}
      />
      <DeleteButton id={id} />
    </div>
  );
}

export default TrackerControl;
