import React from 'react';
import { useDispatch } from 'react-redux';
import {
  changeStopwatchState,
  deleteTracker,
} from '../../actions/trackersActions';
import {
  MdPauseCircleOutline as Pause,
  MdPlayCircleOutline as Start,
  MdRemove as Delete,
} from 'react-icons/md';

function Control({ id, paused, breakpoint, duration }) {
  
  const dispatch = useDispatch();

  const deleteTrackerHandler = () => {
    dispatch(deleteTracker(id));
  };

  const stopwatchStateHandler = () => {
    dispatch(changeStopwatchState(id, paused, breakpoint, duration));
  };

  // TODO: Optimize code duplication
  const stopwatchStateControl = paused ? (
    <Start onClick={stopwatchStateHandler} />
  ) : (
    <Pause onClick={stopwatchStateHandler} />
  );

  return (
    <div>
      {stopwatchStateControl}
      <Delete onClick={deleteTrackerHandler} />
    </div>
  );
}

export default Control;
