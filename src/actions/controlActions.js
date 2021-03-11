import { CHANGE_STOPWATCH_STATE } from './types';

export const changeStopwatchState = (id, paused) => (dispatch) => {
  dispatch({
    type: CHANGE_STOPWATCH_STATE,
    payload: { id, paused: !paused },
  });
};
