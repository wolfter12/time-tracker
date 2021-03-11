import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import {
  ADD_TRACKER,
  DELETE_TRACKER,
  CHANGE_STOPWATCH_STATE,
  UPDATE_STOPWATCHES,
} from './types';

// TODO: Check if it is better to move logic in first argument
// https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44#dd39
export const addTracker = (name) => (dispatch) => {
  const now = moment();
  const newTracker = {
    id: uuidv4(),
    name: name || now.format('DD/MM/YYYY HH:mm:ss'),
    breakpoint: now.toJSON(),
    duration: moment.duration().toJSON(),
    paused: false,
  };
  dispatch({
    type: ADD_TRACKER,
    payload: newTracker,
  });
};

export const deleteTracker = (id) => (dispatch) => {
  dispatch({
    type: DELETE_TRACKER,
    id,
  });
};

export const changeStopwatchState = (id, paused, breakpoint, duration) => (
  dispatch
) => {
  console.log('changeStopwatchState');
  const isPaused = !paused; // after on start/stop button clicked
  const currentBreakpoint = moment();
  const currentDuration = isPaused
    ? moment.duration(duration).add(currentBreakpoint.diff(breakpoint))
    : moment.duration(duration);
  dispatch({
    type: CHANGE_STOPWATCH_STATE,
    payload: {
      id,
      paused: isPaused,
      breakpoint: currentBreakpoint.toJSON(),
      duration: currentDuration.toJSON(),
    },
  });
};

export const updateStopwatches = () => (dispatch) => {
  console.log('updating');
  dispatch({
    type: UPDATE_STOPWATCHES,
  });
};
