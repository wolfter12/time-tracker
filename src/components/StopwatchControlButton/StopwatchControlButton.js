import React from 'react';
import { useDispatch } from 'react-redux';
import { changeStopwatchState } from '../../actions/trackersActions';
import {
  MdPauseCircleOutline as Pause,
  MdPlayCircleOutline as Start,
} from 'react-icons/md';
import { IconContext } from 'react-icons';
import style, { icon, baseline } from './StopwatchControlButton.module.css';

function StopwatchControlButton({ id, paused, breakpoint, duration }) {
  const dispatch = useDispatch();
  const stopwatchStateHandler = () => {
    dispatch(changeStopwatchState(id, paused, breakpoint, duration));
  };
  // FIXME: code duplication
  const stopwatchStateControl = paused ? (
    <Start onClick={stopwatchStateHandler} />
  ) : (
    <Pause onClick={stopwatchStateHandler} />
  );
  return (
    <div className={style.btn}>
      <div className={`${icon} ${baseline}`}>
        <IconContext.Provider value={{ className: style['react-icon'] }}>
          {stopwatchStateControl}
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default StopwatchControlButton;
