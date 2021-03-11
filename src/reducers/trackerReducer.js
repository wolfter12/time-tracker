import { ADD_TRACKER, DELETE_TRACKER } from '../actions/types';

const initialState = {
  items: [],
};

const trackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRACKER:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case DELETE_TRACKER:
      return {
        ...state,
        items: state.items.filter((tracker) => tracker.id !== action.id),
      };
    default:
      return state;
  }
};

export default trackerReducer;
