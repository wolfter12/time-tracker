import { ADD_TRACKER, DELETE_TRACKER, GET_TRACKERS } from './types';

const TRACKERS = 'trackers';

export const getTrackers = () => (dispatch) => {
  console.log('getting trackers');
  try {
    const appData = localStorage.getItem(TRACKERS);
    if (appData !== null) {
      const localTrackers = JSON.parse(appData);
      if (Array.isArray(localTrackers)) {
        dispatch({
          type: GET_TRACKERS,
          payload: localTrackers,
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export const addTracker = (trackerData) => (dispatch) => {
  dispatch({
    type: ADD_TRACKER,
    payload: trackerData,
  });
};
