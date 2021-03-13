import moment from 'moment';
import { UPDATE_STOPWATCHES } from './types';

export const updateStopwatches = () => (dispatch, getState) => {
  const updatedTrackers = getState().trackers.map((tracker) => {
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
  dispatch({
    type: UPDATE_STOPWATCHES,
    updatedTrackers,
  });
};
