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
    default:
      return state;
  }
};

export default trackerReducer;
