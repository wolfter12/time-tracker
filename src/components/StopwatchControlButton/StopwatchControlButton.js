import React from 'react';
import { useDispatch } from 'react-redux';
import { changeStopwatchState } from '../../actions/trackersActions';
import {
  MdPauseCircleOutline as Pause,
  MdPlayCircleOutline as Start,
} from 'react-icons/md';
import IconButton from '../IconButton';
import style from './StopwatchControlButton.module.css';

function StopwatchControlButton({ id, paused, breakpoint, duration }) {
  const dispatch = useDispatch();
  const stopwatchStateHandler = () => {
    dispatch(changeStopwatchState(id, paused, breakpoint, duration));
  };
  const stateIcon = paused ? <Start /> : <Pause />;

  return (
    <div className={style.btn} onClick={stopwatchStateHandler}>
      <IconButton>{stateIcon}</IconButton>
    </div>
  );
}

export default StopwatchControlButton;
