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
    setTrackers((trackers) => [...trackers, data]);
    localStorage.setItem('trackers', JSON.stringify([...trackers, data]));
    setName('');
  };

  const deleteTracker = (targetId) => {
    const filteredTrackers = trackers.filter(({ id }) => id !== targetId);
    localStorage.setItem(TRACKERS, JSON.stringify(filteredTrackers));
    setTrackers(filteredTrackers);
  };

  const updateStopwatches = () => {
    setTrackers((trackers) => {
      const newTrackers = trackers.map((tracker) => {
        const oldBreakPoint = moment(tracker.breakpoint);
        const oldDuration = moment.duration(tracker.duration);
        const newBreakPoint = moment();
        const newDuration = oldDuration.add(newBreakPoint.diff(oldBreakPoint));
        return {
          ...tracker,
          breakpoint: newBreakPoint,
          duration: newDuration,
        };
      });
      localStorage.setItem(TRACKERS, JSON.stringify(newTrackers));
      return newTrackers;
    });
  };

  useEffect(() => {
    const interval = setInterval(updateStopwatches, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header />
      <TrackerInput
        trackerName={name}
        onInputHandler={onInputHandler}
        onButtonHandler={addNewTracker}
      />
      <TrackingList trackers={trackers} onDeleteHandler={deleteTracker} />
    </div>
  );
}

export default App;
