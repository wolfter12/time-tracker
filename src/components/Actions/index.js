import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTracker } from '../../actions/trackersActions';
import {
  MdPauseCircleOutline as Pause,
  MdPlayCircleOutline as Start,
  MdRemove as Delete,
} from 'react-icons/md';

function Actions({ id, paused, onPlayPause }) {
  const onButtonClick = () => {
    onPlayPause(id);
  };

  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch(deleteTracker(id));
  };

  return (
    <div>
      {paused ? (
        <Start onClick={onButtonClick} />
      ) : (
        <Pause onClick={onButtonClick} />
      )}
      <Delete onClick={onDeleteHandler} />
    </div>
  );
}

export default Actions;
