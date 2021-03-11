import {
  ADD_TRACKER,
  DELETE_TRACKER,
  CHANGE_STOPWATCH_STATE,
  UPDATE_STOPWATCHES,
} from '../actions/types';
import moment from 'moment';

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
          return {
            ...tracker,
            paused: action.payload.paused,
            breakpoint: action.payload.breakpoint,
          };
        }
        return tracker;
      });
    case UPDATE_STOPWATCHES:
      return state.map((tracker) => {
        if (tracker.paused) {
          return tracker;
        }
        const prevBreakpoint = moment(tracker.breakpoint);
        const prevDuration = moment.duration(tracker.duration);
        const nextBreakpoint = moment();
        const nextDuration = prevDuration.add(
          nextBreakpoint.diff(prevBreakpoint)
        );
        return {
          ...tracker,
          breakpoint: nextBreakpoint.toJSON(),
          duration: nextDuration.toJSON(),
        };
      });
    default:
      return state;
  }
};

export default trackerReducer;
