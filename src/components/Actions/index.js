import React from 'react';
import {
  MdPauseCircleOutline as Pause,
  MdPlayCircleOutline as Start,
  MdRemove as Delete,
} from 'react-icons/md';

function Actions({ id, paused, onDeleteHandler }) {
  return (
    <div>
      {paused ? <Pause /> : <Start />}
      <Delete onClick={() => onDeleteHandler(id)} />
    </div>
  );
}

export default Actions;
