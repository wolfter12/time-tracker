import React from 'react';
import {
  MdPauseCircleOutline as Pause,
  MdPlayCircleOutline as Start,
  MdRemove as Delete,
} from 'react-icons/md';

function Actions({ id, paused, onDeleteHandler, onPlayPause }) {
  const onButtonClick = () => {
    onPlayPause(id);
  };
  return (
    <div>
      {paused ? (
        <Start onClick={onButtonClick} />
      ) : (
        <Pause onClick={onButtonClick} />
      )}
      <Delete onClick={() => onDeleteHandler(id)} />
    </div>
  );
}

export default Actions;
