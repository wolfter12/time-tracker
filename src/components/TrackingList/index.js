import React, { useState, useEffect } from 'react';

import Tracker from '../Tracker';

function TrackingList({ trackers, onDeleteHandler }) {
  const trackersList = trackers.map((tracker) => {
    return (
      <Tracker
        key={tracker.id}
        tracker={tracker}
        onDeleteHandler={onDeleteHandler}
      />
    );
  });
  return <div>{trackersList}</div>;
}

export default TrackingList;
