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
    const appData = localStorage.getItem(TRACKERS);
    try {
      if (appData !== null) {
        const localTrackers = JSON.parse(appData);
        if (Array.isArray(localTrackers)) {
          setTrackers(localTrackers);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onInputHandler = (e) => {
    setName(e.target.value);
  };

  const addNewTracker = () => {
    const now = moment();
    const newTracker = {
      id: uuidv4(),
      name: name || now.format('DD/MM/YYYY HH:mm:ss'),
      breakpoint: now.toJSON(),
      duration: moment.duration().toJSON(),
      paused: false,
    };
    localStorage.setItem(TRACKERS, JSON.stringify([...trackers, newTracker]));
    setTrackers((trackers) => [...trackers, newTracker]);
    setName('');
  };

  const deleteTracker = (targetId) => {
    const filteredTrackers = trackers.filter(({ id }) => id !== targetId);
    localStorage.setItem(TRACKERS, JSON.stringify(filteredTrackers));
    setTrackers(filteredTrackers);
  };

  const playPause = (id) => {
    setTrackers((trackers) => {
      const updatedTrackers = trackers.map((tracker) => {
        if (tracker.id === id) {
          return { ...tracker, paused: !tracker.paused, breakpoint: null };
        }
        return tracker;
      });
      localStorage.setItem(TRACKERS, JSON.stringify(updatedTrackers));
      return updatedTrackers;
    });
  };

  const updateStopwatches = () => {
    setTrackers((trackers) => {
      const updatedTrackers = trackers.map((tracker) => {
        if (tracker.paused) {
          return tracker;
        }
        const prevBreakpoint = moment(tracker.breakpoint);
        const prevDuration = moment.duration(tracker.duration);
        const nextBreakpoint = moment();
        const nextDuration = prevDuration.add(nextBreakpoint.diff(prevBreakpoint));
        return {
          ...tracker,
          breakpoint: nextBreakpoint.toJSON(),
          duration: nextDuration.toJSON(),
        };
      });
      localStorage.setItem(TRACKERS, JSON.stringify(updatedTrackers));
      return updatedTrackers;
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
      <TrackingList
        trackers={trackers}
        onDeleteHandler={deleteTracker}
        onPlayPause={playPause}
      />
    </div>
  );
}

export default App;
