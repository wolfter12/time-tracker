import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export function TrackerInput() {
  const [name, setName] = useState('');

  const onInputHandler = (e) => {
    setName(e.target.value);
  };

  const addNewTracker = () => {
    const data = {
      id: uuidv4(),
      name: name,
      breakpoint: moment(),
      duration: moment.duration(0, 'seconds').toJSON(),
      paused: false,
    };
    const appData = localStorage.getItem('trackers');
    const trackers = appData !== null ? JSON.parse(appData) : [];
    localStorage.setItem('trackers', JSON.stringify([...trackers, data]));
    setName('');
  };

  return (
    <div>
      <input type="text" value={name} onInput={onInputHandler} />
      <button onClick={addNewTracker}>start</button>
    </div>
  );
}

export default TrackerInput;
