import { CHANGE_STOPWATCH_STATE } from './types';

const initialState = [];

export const changeStopWatchState = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STOPWATCH_STATE:
      return state.map((tracker) => {
        if (tracker.id === action.id) {
          return { ...tracker, paused: action.paused };
        }
        return tracker;
      });
    default:
      return state;
  }
};
