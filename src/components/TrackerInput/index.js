import React from 'react';
import { MdPlayCircleOutline as Start } from 'react-icons/md';

function TrackerInput({ trackerName, onInputHandler, onButtonHandler }) {
  return (
    <div>
      <input type="text" value={trackerName} onInput={onInputHandler} />
      <Start onClick={onButtonHandler} />
    </div>
  );
}

export default TrackerInput;
