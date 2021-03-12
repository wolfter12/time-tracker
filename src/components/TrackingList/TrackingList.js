import React from 'react';
import { useSelector } from 'react-redux';
import Tracker from '../Tracker';
import style from './TrackingList.module.css';

function TrackingList() {
  const trackers = useSelector((state) => state.trackers);

  const trackersList = trackers.map((tracker) => (
    <Tracker key={tracker.id} tracker={tracker} />
  ));

  return <div className={style.trackers}>{trackersList}</div>;
}

export default TrackingList;
