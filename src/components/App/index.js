import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import Header from '../Header';
import TrackerInput from '../TrackerInput';
import TrackingList from '../TrackingList';

const TRACKERS = 'trackers';

function App() {
  const [name, setName] = useState('');
  const [trackers, setTrackers] = useState([]);

  useEffect(() => {
    const localStorageTrackers = localStorage.getItem(TRACKERS);
    if (localStorageTrackers !== null) {
      setTrackers(JSON.parse(localStorageTrackers));
    }
  }, []);

  const onInputHandler = (e) => {
    setName(e.target.value);
  };

  const addNewTracker = () => {
    const data = {
      id: uuidv4(),
      name: name,
      breakpoint: moment(),
      duration: moment
        .duration({
          seconds: 0,
          minutes: 0,
          hours: 0,
          days: 0,
          weeks: 0,
          months: '0',
          years: '0',
        })
        .toJSON(),
      paused: false,
    };
    const appData = localStorage.getItem('trackers');
    const trackers = appData !== null ? JSON.parse(appData) : [];
    setTrackers([...trackers, data]);
    localStorage.setItem('trackers', JSON.stringify([...trackers, data]));
    setName('');
  };

  return (
    <div>
      <Header />
      <TrackerInput
        trackerName={name}
        onInputHandler={onInputHandler}
        onButtonHandler={addNewTracker}
      />
      <TrackingList trackers={trackers} />
    </div>
  );
}

export default App;
