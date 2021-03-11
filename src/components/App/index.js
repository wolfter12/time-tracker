import React, { useState, useEffect } from 'react';

import Header from '../Header';
import TrackerInput from '../TrackerInput';
import TrackingList from '../TrackingList';

const TRACKERS = 'trackers';

function App() {
  const [name, setName] = useState('');
  const [trackers, setTrackers] = useState([]);

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

  // const updateStopwatches = () => {
  //   setTrackers((trackers) => {
  //     const updatedTrackers = trackers.map((tracker) => {
  //       if (tracker.paused) {
  //         return tracker;
  //       }
  //       const prevBreakpoint = moment(tracker.breakpoint);
  //       const prevDuration = moment.duration(tracker.duration);
  //       const nextBreakpoint = moment();
  //       const nextDuration = prevDuration.add(
  //         nextBreakpoint.diff(prevBreakpoint)
  //       );
  //       return {
  //         ...tracker,
  //         breakpoint: nextBreakpoint.toJSON(),
  //         duration: nextDuration.toJSON(),
  //       };
  //     });
  //     localStorage.setItem(TRACKERS, JSON.stringify(updatedTrackers));
  //     return updatedTrackers;
  //   });
  // };

  // useEffect(() => {
  //   const interval = setInterval(updateStopwatches, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <Header />
      {/* <TrackerInput
        trackerName={name}
        onInputHandler={onInputHandler}
        onButtonHandler={addNewTracker}
      />
      <TrackingList
        trackers={trackers}
        onDeleteHandler={deleteTracker}
        onPlayPause={playPause}
      /> */}
      <TrackerInput />
      <TrackingList />
    </div>
  );
}

export default App;
