import React from 'react';
import {
  MdPauseCircleOutline as Pause,
  MdPlayCircleOutline as Start,
  MdRemove as Delete,
} from 'react-icons/md';

function Actions({ paused }) {
  return (
    <div>
      {paused ? <Pause /> : <Start />}
      <Delete />
    </div>
  );
}

export default Actions;
