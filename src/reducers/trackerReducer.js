import { ADD_TRACKER, DELETE_TRACKER, GET_TRACKERS } from '../actions/types';

const initialState = {
  items: [],
  item: {},
};

const trackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACKERS:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_TRACKER:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default trackerReducer;
