import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment-duration-format';

function TrackingList({ trackers }) {
  return (
    <div>
      {trackers.map(({ id, name, duration, breakpoint, paused }) => {
        const currentDuration = moment.duration(duration);
        const seconds = `00${currentDuration.get('seconds')}`.slice(-2);
        const minutes = `00${currentDuration.get('minutes')}`.slice(-2);
        const hours = `00${currentDuration.get('hours')}`.slice(-2);
        return (
          <div key={id} style={{ display: 'flex' }}>
            <h3>{name}</h3>
            <span>{`${hours}:${minutes}:${seconds}`}</span>
          </div>
        );
      })}
    </div>
  );
}

export default TrackingList;
