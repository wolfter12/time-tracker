import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateStopwatches } from '../../actions/trackersActions';

import Header from '../Header';
import TrackerInput from '../TrackerInput';
import TrackingList from '../TrackingList';

function App() {
  const dispatch = useDispatch();
  const update = () => {
    dispatch(updateStopwatches());
  };
  useEffect(() => {
    const intervalId = setInterval(update, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <Header />
      <TrackerInput />
      <TrackingList />
    </div>
  );
}

export default App;
