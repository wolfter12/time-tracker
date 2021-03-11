import {
  ADD_TRACKER,
  DELETE_TRACKER,
  CHANGE_STOPWATCH_STATE,
} from '../actions/types';

const initialState = [];

const trackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRACKER:
      console.log('state', state);
      return [action.payload, ...state];
    case DELETE_TRACKER:
      return state.filter((tracker) => tracker.id !== action.id);
    case CHANGE_STOPWATCH_STATE:
      return state.map((tracker) => {
        if (tracker.id === action.payload.id) {
          return { ...tracker, paused: action.payload.paused };
        }
        return tracker;
      });
    default:
      return state;
  }
};

export default trackerReducer;
