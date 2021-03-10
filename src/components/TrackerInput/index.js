import React from 'react';

function TrackerInput({ trackerName, onInputHandler, onButtonHandler }) {
  return (
    <div>
      <input type="text" value={trackerName} onInput={onInputHandler} />
      <button onClick={onButtonHandler}>start</button>
    </div>
  );
}

export default TrackerInput;
