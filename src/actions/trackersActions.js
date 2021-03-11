import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { ADD_TRACKER, DELETE_TRACKER } from './types';

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
