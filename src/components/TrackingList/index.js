import React, { useState, useEffect } from 'react';

import Tracker from '../Tracker';

function TrackingList({ trackers }) {
  const trackersList = trackers.map((tracker) => {
    return <Tracker key={tracker.id} tracker={tracker} />;
  });
  return <div>{trackersList}</div>;
}

export default TrackingList;
