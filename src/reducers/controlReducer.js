import { CHANGE_STOPWATCH_STATE } from './types';

const initialState = [];

const stopwatchReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default stopwatchReducer;
