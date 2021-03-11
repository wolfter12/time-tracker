import {
  ADD_TRACKER,
  DELETE_TRACKER,
  CHANGE_STOPWATCH_STATE,
  UPDATE_STOPWATCHES,
} from '../actions/types';

const initialState = [];

const trackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRACKER:
      return [action.payload, ...state];
    case DELETE_TRACKER:
      return state.filter((tracker) => tracker.id !== action.id);
    case CHANGE_STOPWATCH_STATE:
      return state.map((tracker) => {
        if (tracker.id === action.payload.id) {
          const { paused, breakpoint, duration } = action.payload;
          return {
            ...tracker,
            paused,
            breakpoint,
            duration,
          };
        }
        return tracker;
      });
    case UPDATE_STOPWATCHES:
      return action.updatedTrackers;
    default:
      return state;
  }
};

export default trackerReducer;
