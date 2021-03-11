import { ADD_TRACKER, DELETE_TRACKER } from '../actions/types';

const initialState = [];

const trackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRACKER:
      console.log('state', state);
      return [action.payload, ...state];
    case DELETE_TRACKER:
      return state.filter((tracker) => tracker.id !== action.id);
    default:
      return state;
  }
};

export default trackerReducer;
