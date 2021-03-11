import React from 'react';
import { useSelector } from 'react-redux';

import Tracker from '../Tracker';

function TrackingList() {
  const trackers = useSelector((state) => state.trackers);

  const trackersList = trackers.map((tracker) => {
    return <Tracker key={tracker.id} tracker={tracker} />;
  });

  return <div>{trackersList}</div>;
}

export default TrackingList;

