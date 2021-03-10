import React from 'react';

import Tracker from '../Tracker';

function TrackingList({ trackers, onDeleteHandler, onPlayPause }) {
  const trackersList = trackers.map((tracker) => {
    return (
      <Tracker
        key={tracker.id}
        tracker={tracker}
        onDeleteHandler={onDeleteHandler}
        onPlayPause={onPlayPause}
      />
    );
  });
  return <div>{trackersList}</div>;
}

export default TrackingList;
